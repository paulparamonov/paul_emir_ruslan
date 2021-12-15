import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { List } from "antd";
import { cartContext } from "../../contexts/cartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { getCart, cart } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return (
    <div className="container">
      <List
        itemLayout="vertical"
        size="large"
        dataSource={cart?.products}
        footer={<h2>Total: {cart?.totalPrice}$</h2>}
        renderItem={(item) => <CartItem item={item} />}
      />
      <Link
      to="/payment" >
              Оформить заказ
            </Link>
    </div>
  );
};

export default Cart;
