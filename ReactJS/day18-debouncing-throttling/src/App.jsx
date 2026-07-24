import axios from "axios";
import React, { useEffect } from "react";

let timer;

const App = () => {
  const [products, setProducts] = React.useState([]);
  const [allProducts, setAllProducts] = React.useState([]);

  const getProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");

    setProducts(response.data.products);
    setAllProducts(response.data.products);
  };

  const searchProducts = (query) => {
    console.log("filtering...");

    const searchTerm = query.toLowerCase();

    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm),
    );

    setProducts(filteredProducts);
  };

  const handleSearch = (query) => {
    // Previous timer cancel
    clearTimeout(timer);

    // New timer
    timer = setTimeout(() => {
      searchProducts(query);
    }, 500);
  };

  useEffect(() => {
    getProducts();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => handleSearch(e.target.value)}
      />

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
