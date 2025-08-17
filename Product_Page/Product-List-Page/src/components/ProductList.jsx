import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p className="no-products">No products found!</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
