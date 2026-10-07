import { theme } from "antd";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
        showLineNumbers={false}
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
    <div className={`prose max-w-none ${darkMode ? "prose-invert" : ""}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ children, className }) {
            const match = /language-(\w+)/.exec(className || "");
            if (!match) return <code>{children}</code>;

            const code = String(children).replace(/\n$/, "");
            return (
              <SyntaxHighlighter
                language={match[1] || language}
                style={darkMode ? oneDark : oneLight}
                showLineNumbers={false}
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
          pre({ children }) {
            return <>{children}</>;
          },
          img({ src, alt, title }) {
            const width = title?.match(/(?:^|\s)width=(\d+(?:px|%)?)/)?.[1];
            const height = title?.match(/(?:^|\s)height=(\d+(?:px|%)?)/)?.[1];

            return (
              <img
                src={src}
                alt={alt ?? ""}
                title={title}
                loading="lazy"
                style={{
                  width: width
                    ? /^\d+$/.test(width)
                      ? `${width}px`
                      : width
                    : undefined,
                  height: height
                    ? /^\d+$/.test(height)
                      ? `${height}px`
                      : height
                    : undefined,
                }}
              />
            );
          },
        }}
      >
        {file}
      </ReactMarkdown>
    </div>
  );
};

export default CodeBlock;
