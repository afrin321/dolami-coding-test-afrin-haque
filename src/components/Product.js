import React from "react";
import CopyLink from "./CopyLink";
import Owner from "../images/Avatar_Pictures/VRC image A(F).png";
import Cart from "../images/icons/cart.png";

function Product(props) {
  const [toggleHeart, setToggleHeart] = React.useState(false);
  const [show, setShow] = React.useState(false);

  return (
    <div className="products-item">
      <button className="add-button">
        <img src={Cart} className="cart-icon" />
        <span>Add</span>
      </button>
      <img
        src={require("../images/Avatar_Pictures/" + props.product.name)}
        alt="avatar-image"
        className="avatar-image"
      />
      <div className="product-title">
        {props.product.name} “Avatown” -nice original avatar of Avatown
      </div>
      <div className="products-des">
        <div className="">
          <span className="stars">★★★★★</span>
          <span className="likes">4.7 & 100Likes</span>
        </div>
        <span
          onClick={() => setToggleHeart((prev) => !prev)}
          className={toggleHeart ? "heart-red" : "heart"}
        >
          ♡
        </span>
      </div>
      <div className="products-owner">
        <img src={Owner} alt="product-owner" className="product-owner-avatar" />
        <span className="product-owner-name">Avatar Joe’s</span>
      </div>
      <div className="product-price">
        <sub className="currency">$</sub>
        <span className="price-value">50.00</span>
      </div>
      <div className="product-type">
        <span className="product-type-blue">⬤</span>
        <span className="product-type-info">PC Only</span>
      </div>
      <div className="product-auto-update">
        <span>
          Auto upload service ready, you can use this avatar within 24 hours.
        </span>
        <CopyLink
          productName={props.product.name}
          show={show}
          setShow={setShow}
        />
      </div>
    </div>
  );
}

export default Product;
