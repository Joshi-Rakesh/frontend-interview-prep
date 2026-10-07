import { Outlet } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

const BreadCrumbsLayout = () => {
  return (
    <div className="flex flex-col gap-3">
      <Breadcrumbs />
      <Outlet />
    </div>
  );
};

export default BreadCrumbsLayout;
