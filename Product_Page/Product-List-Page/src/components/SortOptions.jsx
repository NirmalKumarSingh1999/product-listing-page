import React from "react";

const SortOptions = ({ sortOption, setSortOption }) => {
  return (
    <select
      className="sort-dropdown"
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
    >
      <option value="">Sort By</option>
      <option value="lowToHigh">Price: Low to High</option>
      <option value="highToLow">Price: High to Low</option>
      <option value="category">Category</option>
    </select>
  );
};

export default SortOptions;
