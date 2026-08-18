import { Layout, Segmented, Switch, Typography, theme } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppTheme } from "../themeProvider/ThemeProvider";
const { Header } = Layout;
const { Title } = Typography;

export default function AppHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = theme.useToken();
  const { darkMode, toggleTheme } = useAppTheme();
  const currentTab = location.pathname.startsWith("/js") ? "js" : "react";

  return (
    <Header
      style={{
        background: token.colorBgContainer,
        borderBottom: `1px solid ${token.colorBorder}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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
          onChange={(value) => navigate(`/${value}`)}
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
