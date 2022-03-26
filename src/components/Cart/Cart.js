import React from "react";
// CSS
import "./Cart.css";

const Cart = ({ cart, handlerResetCart }) => {
  //Handlers
  const handleChoseForMe = () => {
    if (!cart.length) return;
    const randomNumber = Math.trunc(Math.random() * cart.length);
    alert(
      `You should Buy: ${cart[randomNumber].name} ($${cart[randomNumber].price})`
    );
  };

  return (
    <div className="cart">
      <h3 className="cart_heading">Selected Items:</h3>
      {cart.map((val) => (
        <h4 key={val.id}>{val.name}</h4>
      ))}
      <button onClick={handleChoseForMe}>CHOSE 1 FOR ME </button>
      <button onClick={handlerResetCart}>CHOSE AGAIN</button>
    </div>
  );
};

export default Cart;
