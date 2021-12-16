import React, { useReducer } from "react";

import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";

import { CASE_GET_CART, REMOVE_CART } from "../helpers/cases";
import axios from "axios";
import { PAYMENT_API } from "../helpers/consts";

export const cartContext = React.createContext();

const INIT_STATE = {
  cart: {},
  cartLength: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_CART:
      return {
        ...state,
        cart: action.payload,
        cartLength: action.payload.products.length,
      };
      case REMOVE_CART:
        return {...state, cart: {}, cartLength: 0,}
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addProductToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    let filteredCart = cart.products.filter(
      (item) => item.item.id === product.id
    );
    if (filteredCart.length > 0) {
      cart.products = cart.products.filter(
        (item) => item.item.id !== product.id
      );
    } else {
      cart.products.push(newProduct);
    }
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart()
  }
  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    cart.totalPrice = calcTotalPrice(cart.products);
    dispatch({
      type: CASE_GET_CART,
      payload: cart,
    });
  }
  function deleteFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    cart.products = cart.products.filter((item) => item.item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  function checkItemInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let filteredCart = cart.products.filter((item) => item.item.id === id);
    return filteredCart.length > 0 ? true : false;
  }

  async function createPayment(newPayment) {
    await axios.post(PAYMENT_API , newPayment);
    localStorage.removeItem('cart')
    dispatch({
      type: REMOVE_CART,
    });
  }

<<<<<<< HEAD
/*

=======

function clearCart(){
  localStorage.removeItem('cart')
    dispatch({
      type: REMOVE_CART,
    });
}

/*


>>>>>>> 053a03af5d177fa381e9eae9e4f43364b3872a9a
*/
  
  
  


  function changeProductCount(count, id) {
    if (count <= 0) {
      count = 1;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((item) => {
      if (item.item.id === id) {
        item.count = count;
        item.subPrice = calcSubPrice(item);
      }
      return item;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }
  return (
    <cartContext.Provider
      value={{
        cart: state.cart,
        cartLength: state.cartLength,
        addProductToCart,
        getCart,
        createPayment,
        deleteFromCart,
        checkItemInCart,
        changeProductCount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
