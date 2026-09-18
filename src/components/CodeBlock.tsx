import { theme } from "antd";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useAppTheme } from "../themeProvider/useAppTheme";

interface CodeBlockProps {
  file: string;
  language?: string;
  markdown?: boolean;
}

const CodeBlock = ({
  file,
  language = "tsx",
  markdown = false,
}: CodeBlockProps) => {
  const { token } = theme.useToken();
  const { darkMode } = useAppTheme();

  if (!markdown) {
    return (
      <SyntaxHighlighter
        language={language}
        style={darkMode ? oneDark : oneLight}
        showLineNumbers
        wrapLongLines
        customStyle={{
          margin: 0,
          padding: 16,
          border: `1px solid ${token.colorBorder}`,
          borderLeft: `4px solid ${token.colorPrimary}`,
          borderRadius: token.borderRadius,
          maxHeight: 420,
          overflow: "auto",
        }}
      >
        {file}
      </SyntaxHighlighter>
    );
  }

  return (
    <ReactMarkdown
      components={{
        code({ children, className }) {
          const match = /language-(\w+)/.exec(className || "");
          const code = String(children).replace(/\n$/, "");

          return (
            <SyntaxHighlighter
              language={match?.[1] || language}
              style={darkMode ? oneDark : oneLight}
              showLineNumbers
              wrapLongLines
              customStyle={{
                margin: 0,
                padding: 16,
                border: `1px solid ${token.colorBorder}`,
                borderLeft: `4px solid ${token.colorPrimary}`,
                borderRadius: token.borderRadius,
                maxHeight: 300,
                overflow: "auto",
              }}
            >
              {code}
            </SyntaxHighlighter>
          );
        },
        h1({ children }) {
          return (
            <h1
              className="mb-4 text-3xl font-bold"
              style={{ color: token.colorText }}
            >
              {children}
            </h1>
          );
        },
        h2({ children }) {
          return (
            <h2
              className="mb-3 mt-6 text-2xl font-bold"
              style={{ color: token.colorText }}
            >
              {children}
            </h2>
          );
        },
        h3({ children }) {
          return (
            <h3
              className="mb-2 mt-5 text-xl font-semibold"
              style={{ color: token.colorText }}
            >
              {children}
            </h3>
          );
        },
        p({ children }) {
          return (
            <p className="mb-4 leading-7" style={{ color: token.colorText }}>
              {children}
            </p>
          );
        },
        ul({ children }) {
          return <ul className="mb-4 ml-6 list-disc space-y-1">{children}</ul>;
        },
        ol({ children }) {
          return (
            <ol className="mb-4 ml-6 list-decimal space-y-1">{children}</ol>
          );
        },
        li({ children }) {
          return <li className="pl-1">{children}</li>;
        },
        blockquote({ children }) {
          return (
            <blockquote
              className="mb-4 border-l-4 pl-4 italic"
              style={{
                borderColor: token.colorBorder,
                color: token.colorTextSecondary,
              }}
            >
              {children}
            </blockquote>
          );
        },
        a({ children, href }) {
          return (
            <a
              href={href}
              className="underline"
              style={{ color: token.colorLink }}
              target="_blank"
              rel="noreferrer"
            >
              {children}
            </a>
          );
        },
        hr() {
          return (
            <hr className="my-6" style={{ borderColor: token.colorBorder }} />
          );
        },
      }}
    >
      {file}
    </ReactMarkdown>
  );
};

export default CodeBlock;
