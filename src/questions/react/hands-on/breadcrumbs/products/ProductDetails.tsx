import { Spin, theme } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../../../../interface/products";

const ProductDetails = () => {
  const { productTitle } = useParams();
  const { token } = theme.useToken();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (!productTitle) return;
    fetch(
      `https://dummyjson.com/products/search?q=${encodeURIComponent(productTitle)}`,
    )
      .then((res) => res.json())
      .then((resJson) => {
        const matchingProduct = resJson.products.find(
          (item: Product) =>
            item.title.toLowerCase() === productTitle.toLowerCase(),
        );
        setProduct(matchingProduct);
      });
  }, [productTitle]);

  if (!product)
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Spin size="large" />
      </div>
    );

  return (
    <div className="flex flex-col gap-3">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="max-h-64 w-fit object-contain"
      />
      <h2 className="text-xl font-semibold" style={{ color: token.colorText }}>
        {product.title}
      </h2>
      <p style={{ color: token.colorTextSecondary }}>{product.description}</p>
      <p style={{ color: token.colorText }}>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
