import React from "react";
import "../styles/product.page.css";
import { products as allProducts } from "../products";
import { useParams } from "react-router-dom";
import Location from "../images/icons/location.png";

function ProductPage(props) {
  const { id } = useParams();
  const currentProduct = allProducts.find(
    (product) => product.name == id + ".png"
  );
  const title = currentProduct.name.substring(
    0,
    currentProduct.name.length - 7
  );
  console.log(currentProduct);
  return (
    <div className="product-page">
      <div className="product-display">
        <h2>{title}</h2>
        <img
          className="product-img"
          src={require("../images/Avatar_Pictures/" + currentProduct.name)}
        />
      </div>
      <div className="product-details">
        <h1>{title} “Avatown” -nice original avatar of Avatown</h1>
        <p>
          by <span className="product-by">{"Avatar Joe’s"}</span>
        </p>
        <p>
          <span className="rating">5.0</span>
          <span className="stars">★★★★★</span>
          <span className="likes">4.7 & 100Likes</span>
        </p>
        <div className="price-section">
          <p className="btn-container">
            <span className="price">Buy: $ 50.00</span>
            <button className="btn buynow">Buy Now</button>
            <button className="btn addtocart">Add to Cart</button>
          </p>
          <p className="btn-container">
            <span className="shipping-fee">
              $52.50 Shipping & Import Fees Deposit to UK Details Delivery May 3
              - 11
            </span>
            <span className="shipping-fee">
              {" "}
              <img src={Location} className="location-icon" />
              Deliver to John - UK 558‌
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
