import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { Card } from "antd";
import {
  
  AlignCenterOutlined ,
  BookOutlined,
  TagOutlined
} from "@ant-design/icons";

import { cartContext } from "../../contexts/cartContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import Button_Modal from "../DetailsProduct/Button_Modal";

const ProductCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));

  const { addProductToFavorites, checkItemInFavorites } =
    useContext(FavoritesContext);
  const [checkInFavorites, setCheckInFavorites] = useState(
    checkItemInFavorites(item.id)
  );

  useEffect(() => {
    setCheckInCart(checkItemInCart(item.id));
    setCheckInFavorites(checkItemInFavorites(item.id));
  }, [item.id, checkItemInCart, checkItemInFavorites]);

  return (
    <div className="body">
      <section class="section">
        <div class="container">

              <div class="card1">
            <div class="card__item">

              <div class="card__inner">
                <div class="card__img card__1">
                  <Link class="card__img card__1" to={`/products/${item.id}`}>
                    <img alt="example" src={item.image1} onClick />
                  </Link>
                </div>
                <div class="card__text">
                  
                  <h3 className="mars__text">{item.name__uni}</h3>
                  <h4 className="mars__text">{item.soder}</h4>
                  <h2 className="mars__text">{"$" + item.price}</h2>
                  <BookOutlined
                    style={{
                      color: checkInFavorites ? "yellow" : "black",
                      fontSize: "25px",
                    }}
                    onClick={() => {
                      addProductToFavorites(item);
                      setCheckInFavorites(checkItemInFavorites(item.id));
                    }}
                  />
                  
                      <Link to={`/products/${item.id}`}>
                        <AlignCenterOutlined 
                          style={{ color: "black", fontSize: "25px" }}
                          key="ellipsis"
                        />
                      </Link>
                  <TagOutlined
                    style={{
                      color: checkInCart ? "yellow" : "black",
                      fontSize: "25px",
                    }}
                    onClick={() => {
                      addProductToCart(item);
                      setCheckInCart(checkItemInCart(item.id));
                    }}
                  />
                  
                  
                  
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

     
    </div>
  );
};

export default ProductCard;
