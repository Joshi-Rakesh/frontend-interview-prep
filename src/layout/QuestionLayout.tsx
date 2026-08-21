import { Tabs } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function QuestionLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeKey = location.pathname.endsWith("/theory")
    ? "theory"
    : "practical";

  return (
    <>
      <Tabs
        activeKey={activeKey}
        onChange={(key) => {
          const [, section] = location.pathname.split("/");

          navigate(`/${section}/${key}`);
        }}
        items={[
          {
            key: "practical",
            label: "Coding / Practical",
          },
          {
            key: "theory",
            label: "Theory",
          },
        ]}
      />

      <Outlet />
    </>
  );
}
