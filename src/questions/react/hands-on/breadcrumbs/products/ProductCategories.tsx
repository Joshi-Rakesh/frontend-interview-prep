import { Spin, theme } from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ProductCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const { token } = theme.useToken();
  const location = useLocation();
  const basePath = location.pathname.replace(/\/categories\/[^/]+\/?$/, "");

  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((resJson) => {
        setCategories(resJson);
      });
  }, []);

  if (!categories || !categories.length)
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Spin size="large" />
      </div>
    );

  return (
    <div className="flex flex-col gap-2 justify-center items-start">
      <p className="text-lg">Pick one</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category}
            to={{
              pathname: `${basePath}/categories/${encodeURIComponent(category)}`,
              search: location.search,
              hash: location.hash,
            }}
            className="border rounded-md p-2 capitalize"
            style={{ color: token.colorTextSecondary }}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
