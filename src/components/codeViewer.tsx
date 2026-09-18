import { Card, Tag, Tabs } from "antd";
import {
  DifficultyColor,
  type DifficultyType,
} from "../utility/difficultyColor";
import CodeBlock from "./CodeBlock";

const PANEL_HEIGHT = 500;

const getLanguage = (fileName: string) => {
  const extension = fileName.split(".").pop()?.toLowerCase();

  return extension === "ts" || extension === "tsx"
    ? extension
    : extension === "js" || extension === "jsx"
      ? extension
      : "tsx";
};

type Props = {
  title: string;
  description?: string;
  difficulty: DifficultyType;
  component: React.ReactNode;
  files: {
    fileName: string;
    content: string;
  }[];
};

export default function CodeViewer({
  title,
  description,
  difficulty,
  component,
  files = [],
}: Props) {
  return (
    <Card
      title={
        <div className="flex flex-col py-3">
          <p className="text-lg font-bold">{title}</p>
          {description ? (
            <p className="mt-2 mr-4 font-normal leading-normal text-wrap text-sm">
              {description}
            </p>
          ) : null}
        </div>
      }
      extra={
        difficulty && (
          <Tag color={DifficultyColor[difficulty]}>{difficulty}</Tag>
        )
      }
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <Card
          size="small"
          title="Preview"
          className="h-full"
          styles={{
            body: {
              height: PANEL_HEIGHT,
              overflow: "auto",
            },
          }}
        >
          <div className="flex min-h-full items-center justify-center">
            {component}
          </div>
        </Card>

        <Card size="small" title="Source Code">
          <Tabs
            className="source-tabs"
            items={files?.map((file, index) => ({
              key: `file-${index}`,
              label: file.fileName,
              children: (
                <CodeBlock
                  file={file.content}
                  language={getLanguage(file.fileName)}
                />
              ),
            }))}
          />
        </Card>
      </div>
    </Card>
  );
}
