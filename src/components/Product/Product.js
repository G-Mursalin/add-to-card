import React from "react";
// CSS
import "./Product.css";

const Product = (props) => {
  const { name, img, price } = props.product;
  return (
    <div className="product">
      <div className="product_img_container">
        <img src={img} alt="name" />
      </div>
      <p className="product-name">{name}</p>
      <div className="product-info">
        <p>Price: ${price}</p>
      </div>
      <button className="btn-card">Add To Card</button>
    </div>
  );
};

export default Product;
