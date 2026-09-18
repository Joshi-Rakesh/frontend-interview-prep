import {
  Layout,
  Segmented,
  Select,
  Switch,
  Tag,
  Typography,
  theme,
} from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppTheme } from "../themeProvider/useAppTheme";
import {
  Difficulty,
  DifficultyColor,
  type DifficultyType,
} from "../utility/difficultyColor";
import { useDifficultyFilter } from "../hooks/useDifficultyFilter";
const { Header } = Layout;
const { Title } = Typography;

export default function AppHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = theme.useToken();
  const { darkMode, toggleTheme } = useAppTheme();
  const currentTab = location.pathname.startsWith("/js") ? "js" : "react";
  const { selectedDifficulties, setSelectedDifficulties } =
    useDifficultyFilter();

  return (
    <Header
      style={{
        background: token.colorBgContainer,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
      }}
    >
      <Title
        level={4}
        style={{
          color: token.colorText,
          margin: 0,
        }}
      >
        Frontend Interview Prep
      </Title>

      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <Segmented
          value={currentTab}
          options={[
            {
              label: "React",
              value: "react",
            },
            {
              label: "JavaScript",
              value: "js",
            },
          ]}
          onChange={(value) =>
            navigate(
              `/${value}?difficulty=${Object.values(Difficulty).join(",")}`,
            )
          }
        />

        <Select
          mode="multiple"
          showSearch={false}
          value={selectedDifficulties}
          onChange={(values) =>
            setSelectedDifficulties(values as DifficultyType[])
          }
          tagRender={(props) => {
            const color = DifficultyColor[props.value as DifficultyType];
            return (
              <Tag
                closable={selectedDifficulties.length > 1}
                onClose={props.onClose}
                className="mr-1!"
                style={{
                  backgroundColor: `${color}20`,
                  color,
                }}
              >
                {props.label}
              </Tag>
            );
          }}
          options={Object.values(Difficulty).map((difficulty) => ({
            value: difficulty,
            label: (
              <span
                style={{
                  color: DifficultyColor[difficulty],
                }}
              >
                {difficulty}
              </span>
            ),
          }))}
        />

        <Switch
          checked={darkMode}
          onChange={toggleTheme}
          checkedChildren={<MoonOutlined />}
          unCheckedChildren={<SunOutlined />}
        />
      </div>
    </Header>
  );
}
