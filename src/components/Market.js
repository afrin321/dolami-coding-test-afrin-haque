import React from "react";
import Filter from "./Filter";
import Products from "./Products";
import "./../styles/market.css";

function Market() {
  const [filters, setFilters] = React.useState({
    category: "",
    fullAvatarCategory: "",
    humanBased: "",
    price: "",
    title: "",
  });
  const [page, setPage] = React.useState(0);

  React.useEffect(() => setPage(0), [filters]);

  return (
    <div className="market-container">
      <Filter updateFilters={setFilters} />
      <Products filters={filters} setPage={setPage} page={page} />
    </div>
  );
}

export default Market;
