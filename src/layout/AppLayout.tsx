import { Layout as AntLayout, theme } from "antd";
import { Outlet } from "react-router-dom";
import AppHeader from "../header/AppHeader";
const { Content } = AntLayout;

export default function AppLayout() {
  const { token } = theme.useToken();

  return (
    <AntLayout
      style={{
        minHeight: "100vh",
        background: token.colorBgLayout,
      }}
    >
      <AppHeader />

      <Content
        style={{
          padding: 24,
          background: token.colorBgLayout,
        }}
      >
        <Outlet />
      </Content>
    </AntLayout>
  );
}
