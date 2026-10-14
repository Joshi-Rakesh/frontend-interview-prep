import { Button, Card, theme } from "antd";
import { createRunnerDocument } from "../utility/createRunnerDocument";
import CodeBlock from "./CodeBlock";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type RunOutput = {
  kind: "log" | "info" | "warn" | "error" | "system";
  text: string;
};

const TerminalCodeViewer = ({
  code,
  title,
}: {
  code: string;
  title: string;
}) => {
  const { token } = theme.useToken();
  const codeBlockRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [runId, setRunId] = useState(0);
  const [running, setRunning] = useState(false);
  const [output, setOutput] = useState<RunOutput[]>([]);
  const [codeHeight, setCodeHeight] = useState(0);

  useLayoutEffect(() => {
    const codeBlock = codeBlockRef.current;
    if (!codeBlock) return;

    const updateHeight = () => {
      setCodeHeight(codeBlock.getBoundingClientRect().height);
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(codeBlock);

    return () => observer.disconnect();
  }, [code]);

  useEffect(() => {
    const handleMessage = (
      event: MessageEvent<RunOutput & { channel: string }>,
    ) => {
      if (
        event.source !== iframeRef.current?.contentWindow ||
        event.data?.channel !== "interview-prep-runner"
      ) {
        return;
      }

      if (event.data.kind === "system") setRunning(false);
      setOutput((currentOutput) => [...currentOutput, event.data]);
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const runCode = () => {
    setOutput([]);
    setRunning(true);
    setRunId((currentRunId) => currentRunId + 1);
  };

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <Card
        size="small"
        title={title}
        extra={
          <Button type="primary" onClick={runCode} size="small">
            Run
          </Button>
        }
      >
        <div ref={codeBlockRef}>
          <CodeBlock file={code} language="javascript" />
        </div>
      </Card>
      <Card size="small" title="Terminal">
        <div
          aria-live="polite"
          className="rounded-md p-4 font-mono text-sm"
          style={{
            background: token.colorBgLayout,
            color: token.colorText,
            boxSizing: "border-box",
            height: codeHeight,
            overflow: "auto",
            minHeight: 0,
          }}
        >
          {output.length ? (
            output.map((entry, index) => (
              <pre
                key={`${index}-${entry.kind}`}
                className="whitespace-pre-wrap wrap-break-word"
                style={{
                  color:
                    entry.kind === "error"
                      ? token.colorError
                      : entry.kind === "warn"
                        ? token.colorWarning
                        : entry.kind === "system"
                          ? token.colorTextSecondary
                          : token.colorSuccess,
                }}
              >
                {entry.kind === "system" ? "" : "> "}
                {entry.text}
              </pre>
            ))
          ) : (
            <p className="text-slate-400">
              {running ? "Running..." : "Click Run to see output."}
            </p>
          )}
        </div>
      </Card>
      {runId > 0 && (
        <iframe
          key={runId}
          ref={iframeRef}
          title="Isolated JavaScript runner"
          sandbox="allow-scripts"
          srcDoc={createRunnerDocument(code)}
          className="hidden"
        />
      )}
    </div>
  );
};

export default TerminalCodeViewer;
