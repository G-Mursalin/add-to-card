import React from "react";
// CSS
import "./Product.css";
// Icon
import { FaCartPlus } from "react-icons/fa";
const Product = ({ product, handleAddCarts }) => {
  const { name, img, price } = product;
  return (
    <div className="product">
      <div className="product_img_container">
        <img src={img} alt="name" />
      </div>
      <p className="product-name">{name}</p>
      <div className="product-info">
        <p>Price: ${price}</p>
      </div>
      <button className="btn-card" onClick={() => handleAddCarts(product)}>
        Add To Card <FaCartPlus size="1.2rem" className="btn_icon" />
      </button>
    </div>
  );
};

export default Product;
