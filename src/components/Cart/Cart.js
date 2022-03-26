import React from "react";
// CSS
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div>
      <h3>Selected Items</h3>
      {cart.map((val) => (
        <h4 key={val.id}>{val.name}</h4>
      ))}
      <button>CHOSE 1 FOR ME </button>
      <button>CHOSE AGAIN</button>
    </div>
  );
};

export default Cart;
