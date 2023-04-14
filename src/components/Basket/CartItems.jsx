import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartItems = ({ cart }) => {
  const summ = cart
    .map((i) => {
      return Number(i.price - i.discount);
    })
    .reduce(function (a, b) {
      return a + b;
    }, 0);

  return (
    <div className="basket__container">
      <div className="basket_basket">Корзина:</div>
      <div className="sdelat_flex">
        <div className="main_boxshadov">
          {cart.map((i) => {
            return (
              <CartItem
                key={i._id}
                name={i.name}
                price={i.price}
                discount={i.discount}
                image={i.image}
                id={i._id}
              />
            );
          })}
        </div>
        <div className="orderingOrder">
          <div className="ordering__finalPrice">
            {cart.map((i) => {
              return (
                <div className="finalPrice__container" key={i._id}>
                  <div>{i.name}</div>
                  <div className="emptyinside" />
                  <div>{i.price - i.discount} ₽</div>
                </div>
              );
            })}
          </div>
          <div className="summary__order">ИТОГО: {summ}₽</div>

          <Link to={"/creditcard"} className="orderingOrder_one">
            Оформить заказ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
