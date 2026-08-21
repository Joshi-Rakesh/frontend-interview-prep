import { Card, Tag, Tabs, theme } from "antd";
import {
  DifficultyColor,
  type DifficultyType,
} from "../utility/difficultyColor";

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
  const { token } = theme.useToken();

  const codeStyle = {
    margin: 0,
    padding: 16,
    maxHeight: 450,
    overflowY: "auto" as const,
    background: token.colorBgLayout,
    color: token.colorText,
    borderRadius: token.borderRadius,
  };

  return (
    <Card
      title={
        <div className="flex flex-col py-3">
          <p className="text-lg font-bold">{title}</p>
          {description ? (
            <p className="text-sm mt-2 text-wrap mr-12">{description}</p>
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
          styles={{
            body: {
              height: "95%",
              display: "flex",
            },
          }}
        >
          <div
            className="flex flex-1 items-center justify-center"
            style={{
              overflowY: "auto",
            }}
          >
            {component}
          </div>
        </Card>

        <Card size="small" title="Source Code">
          <Tabs
            items={files?.map((file, index) => ({
              key: `file-${index}`,
              label: file.fileName,
              children: <pre style={codeStyle}>{file.content}</pre>,
            }))}
          />
        </Card>
      </div>
    </Card>
  );
}
