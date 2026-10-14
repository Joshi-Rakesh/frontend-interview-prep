export const createRunnerDocument = (source: string) => {
  const escapedSource = JSON.stringify(source).replace(/</g, "\\u003c");

  return `<!doctype html>
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline' 'unsafe-eval'; connect-src 'none'; img-src 'none'; style-src 'unsafe-inline'">
<script>
const send = (kind, text) => parent.postMessage({ channel: 'interview-prep-runner', kind, text }, '*');
const format = (value) => {
  if (typeof value === 'string') return value;
  if (value instanceof Error) return value.name + ': ' + value.message;
  try { return JSON.stringify(value) ?? String(value); }
  catch { return String(value); }
};
const sandboxConsole = {};
for (const kind of ['log', 'info', 'warn', 'error']) {
  sandboxConsole[kind] = (...values) => send(kind, values.map(format).join(' '));
}
const pendingTimers = new Map();
const originalSetTimeout = window.setTimeout.bind(window);
const originalClearTimeout = window.clearTimeout.bind(window);
window.setTimeout = (callback, delay = 0, ...args) => {
  let timerId;
  let settle;
  const finished = new Promise((resolve) => { settle = resolve; });
  timerId = originalSetTimeout(() => {
    pendingTimers.delete(timerId);
    try { callback(...args); }
    finally { settle(); }
  }, delay);
  pendingTimers.set(timerId, { finished, settle });
  return timerId;
};
window.clearTimeout = (timerId) => {
  originalClearTimeout(timerId);
  const timer = pendingTimers.get(timerId);
  if (timer) {
    pendingTimers.delete(timerId);
    timer.settle();
  }
};
const waitForTimers = async () => {
  while (pendingTimers.size) {
    await Promise.all([...pendingTimers.values()].map(({ finished }) => finished));
  }
};
window.addEventListener('error', (event) => send('error', event.message));
window.addEventListener('unhandledrejection', (event) => send('error', format(event.reason)));
const source = ${escapedSource};
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
try {
  new AsyncFunction('console', source)(sandboxConsole)
    .then(async () => {
      await waitForTimers();
      send('system', 'Execution finished');
    })
    .catch((error) => send('error', format(error)));
} catch (error) {
  send('error', format(error));
}
</script>`;
};
