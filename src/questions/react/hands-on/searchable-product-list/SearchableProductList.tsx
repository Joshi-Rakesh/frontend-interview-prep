import { Card, Input, Tag, theme } from "antd";
import { useEffect, useState } from "react";
import useDebounce from "../custom-hooks/debounce/useDebounce";
import Text from "antd/es/typography/Text";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

const SearchableProductList = () => {
  const { Search } = Input;
  const [products, setProducts] = useState<Product[]>([]);
  const [searchedProduct, setSearchedProduct] = useState<string>("");
  const debouncedSearch = useDebounce(searchedProduct, 700);
  const { token } = theme.useToken();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleProductSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedProduct(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(debouncedSearch.toLowerCase());
  });

  return (
    <div className="flex flex-col gap-4 p-4">
      <Search
        placeholder={"search products"}
        value={searchedProduct}
        onChange={handleProductSearch}
        loading={searchedProduct.trim() !== debouncedSearch.trim()}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts && filteredProducts.length
          ? filteredProducts?.map((product) => {
              return (
                <Card
                  color={token.colorText}
                  key={product?.id}
                  className="overflow-hidden"
                  cover={
                    <div className="flex h-48 items-center justify-center bg-gray-100 p-4">
                      <img
                        src={product?.image}
                        alt={product?.title}
                        className="max-h-full object-contain"
                      />
                    </div>
                  }
                >
                  <p
                    title={product.title}
                    className="line-clamp-2 min-h-12 font-medium"
                  >
                    {product.title}
                  </p>
                  <div className="flex items-center justify-between">
                    <Text
                      strong
                      style={{
                        color: token.colorPrimary,
                      }}
                    >
                      ₹{product.price}
                    </Text>
                    <Tag color="gold">⭐ {product.rating?.rate}</Tag>
                  </div>
                </Card>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default SearchableProductList;
