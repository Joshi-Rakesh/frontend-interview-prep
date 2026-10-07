import { Card, theme } from "antd";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import type { Product } from "../../../../interface/products";

const PAGE_SIZE = 10;

const PaginationUsage = () => {
  const { token } = theme.useToken();
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const totalPages = Math.ceil(total / PAGE_SIZE);

  useEffect(() => {
    const fetchProducts = () => {
      fetch(
        `https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${(page - 1) * PAGE_SIZE}`,
      )
        .then((response) => response.json())
        .then((dataJson) => {
          setTotal(dataJson?.total || 0);
          if (dataJson?.products?.length) {
            setProducts(dataJson.products);
          }
        });
    };

    fetchProducts();
  }, [page]);

  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }
    setPage(page);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products && products.length
          ? products?.map((product) => {
              return (
                <Card
                  key={product.id}
                  title={product.title}
                  color={token.colorText}
                  className="overflow-hidden"
                  cover={
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="max-h-full object-contain h-24"
                    />
                  }
                ></Card>
              );
            })
          : null}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={changePage}
      />
    </div>
  );
};

export default PaginationUsage;
