import React, { useEffect, useState } from "react";
// CSS
import "./Shops.css";
// Components
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import QuestionAnswer from "./QuestionAnswer";

const Shops = () => {
  //Declaring States
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  //Handlers
  const handleAddCarts = (product) => {
    if (cart.find((val) => val.id === product.id)) return;
    setCart((preState) => [...preState, product]);
  };
  const handlerResetCart = () => {
    setCart([]);
  };

  //Fetching Data
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <section className="shop_container">
        <div className="products_container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddCarts={handleAddCarts}
            />
          ))}
        </div>
        <div className="cart_container">
          <Cart cart={cart} handlerResetCart={handlerResetCart} />
        </div>
      </section>
      <QuestionAnswer />
    </div>
  );
};

export default Shops;
