import React from "react";
import Product from "./Product";
import "./../styles/market.css";
import { products as allProducts } from "../products";

function Products(props) {
  const [products] = React.useState(allProducts);
  const [filtered, setFiltered] = React.useState([]);
  const options = [
    "Price: Low to High",
    "Price: High to Low",
    "Customer Review",
    "New",
    "Polygon:Low to High",
    "Polygon:High to Low",
  ];

  React.useEffect(() => {
    if (products && products.length) {
      setFiltered(allProducts);
      if (props.filters.humanBased && props.filters.humanBased != "") {
        const humanBasedFilters = allProducts
          .filter((product) => product.gender === props.filters.humanBased)
          .filter(
            (p, i) => i >= getFirst(props.page) && i < getLast(props.page)
          )
          .map((item) => <Product product={item} key={item.name} />);
        setFiltered(humanBasedFilters);
      } else {
        setFiltered((prev) =>
          allProducts
            .filter(
              (p, i) => i >= getFirst(props.page) && i < getLast(props.page)
            )
            .map((item) => <Product product={item} key={item.name} />)
        );
      }
    } else {
      console.log("Err");
    }
  }, [props.page, props.filters]);

  function getFirst(page) {
    return page * 12;
  }

  function getLast(page) {
    return getFirst(page) + 12;
  }

  function getFinalPage() {
    // console.log("last index: " + getLast(props.page));
    // console.log("products.length: " + filtered.length);
    return getLast(props.page) > filtered.length ? true : false;
  }

  const prevPage = () => {
    const newPage = props.page - 1;
    if (newPage >= 0) {
      props.setPage((prev) => prev - 1);
    }
  };
  const nextPage = () => {
    props.setPage((prev) => prev + 1);
  };

  return (
    <div className="products-container">
      <div className="products-heading">
        <span>
          {props.filters.title !== "" ? props.filters.title : "All Items"}
        </span>
        <select className="sorting">
          <option value="" disabled selected>
            Sort by featured ▼
          </option>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="products">{filtered}</div>
      <div className="pagination">
        {
          <p>
            {props.page - 1 >= 0 && (
              <>
                <i href="#" onClick={prevPage} className="angle-link">
                  {"<"}
                </i>
                <button onClick={prevPage} className="prev-page">
                  {props.page}
                </button>
              </>
            )}
            <button className="current-page">{props.page + 1}</button>
            {!getFinalPage() && (
              <>
                <button onClick={nextPage} className="next-page">
                  {props.page + 2}
                </button>
                <i href="#" onClick={nextPage} className="angle-link">
                  {">"}
                </i>
              </>
            )}
          </p>
        }
      </div>
    </div>
  );
}

export default Products;
