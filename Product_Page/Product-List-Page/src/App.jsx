import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import SearchBar from "./components/searchBar";
import SortOptions from "./components/SortOptions";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  // Fetch data function
  const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter & Sort
  const filteredProducts = products
    .filter((product) =>
   product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
   product.category.toLowerCase().includes(searchTerm.toLowerCase())
)
.sort((a, b) => {
      if (sortOption === "lowToHigh") return a.price - b.price;
      if (sortOption === "highToLow") return b.price - a.price;
      if (sortOption === "category")
        return a.category.localeCompare(b.category);
      return 0;
    });

  return (
    <div className="app-container">
      <h1 className="title">🛒 Product Listing Page</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SortOptions sortOption={sortOption} setSortOption={setSortOption} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
