import { Layout as AntLayout, theme } from "antd";
import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import { useAppTheme } from "../themeProvider/useAppTheme";
const { Content } = AntLayout;

export default function AppLayout() {
  const { darkMode } = useAppTheme();
  const { token } = theme.useToken();

  return (
    <AntLayout
      style={{
        minHeight: "100vh",
        background: darkMode
          ? `
      radial-gradient(
        circle at top left,
        rgba(99,102,241,0.15),
        transparent 30%
      ),
      ${token.colorBgLayout}
    `
          : `
      radial-gradient(
        circle at top left,
        rgba(79,70,229,0.08),
        transparent 30%
      ),
      ${token.colorBgLayout}
    `,
      }}
    >
      <AppHeader />

      <Content
        style={{
          padding: 24,
        }}
      >
        <Outlet />
      </Content>
    </AntLayout>
  );
}
