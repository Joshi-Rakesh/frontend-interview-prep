import { Card, Tag, Tabs, theme } from "antd";

type Props = {
  title: string;
  description?: string;
  difficulty?: string;
  component: React.ReactNode;
  code: string;
  utilityCode?: string;
};

export default function CodeViewer({
  title,
  description,
  difficulty,
  component,
  code,
  utilityCode,
}: Props) {
  const { token } = theme.useToken();

  console.log(description, "fsakvjh768");

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
    <Card extra={difficulty && <Tag color="processing">{difficulty}</Tag>}>
      <div className="mb-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        {description && <p className="mt-2 text-md">{description}</p>}
      </div>
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
          {utilityCode ? (
            <Tabs
              items={[
                {
                  key: "component",
                  label: "Component",
                  children: <pre style={codeStyle}>{code}</pre>,
                },
                {
                  key: "utility",
                  label: "Utility",
                  children: <pre style={codeStyle}>{utilityCode}</pre>,
                },
              ]}
            />
          ) : (
            <pre style={codeStyle}>{code}</pre>
          )}
        </Card>
      </div>
    </Card>
  );
}
