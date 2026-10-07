import { Card, Spin, theme } from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import type { Product } from "../../../../../interface/products";

const Products = () => {
  const { category } = useParams();
  const { token } = theme.useToken();
  const [categoryProducts, setCategoryProducts] = useState<Product[]>();
  const location = useLocation();
  const basePath = location.pathname.replace(
    /\/categories\/[^/]+(?:\/products\/[^/]+)?\/?$/,
    "",
  );

  useEffect(() => {
    if (!category) return;
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((resJson) => {
        setCategoryProducts(resJson.products);
      });
  }, [category]);

  if (!categoryProducts)
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Spin size="large" />
      </div>
    );

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categoryProducts && categoryProducts.length
        ? categoryProducts?.map((product) => {
            return (
              <Link
                key={product.id}
                to={{
                  pathname: `${basePath}/categories/${encodeURIComponent(category ?? "")}/${encodeURIComponent(product.title)}`,
                  search: location.search,
                  hash: location.hash,
                }}
                style={{ color: token.colorTextSecondary }}
              >
                <Card
                  title={product?.title}
                  cover={
                    <img
                      draggable={false}
                      alt={product?.title}
                      src={product?.thumbnail}
                    />
                  }
                />
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default Products;
