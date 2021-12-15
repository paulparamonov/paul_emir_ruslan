import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { Carousel, Button  } from "antd";
import { HeartOutlined } from "@ant-design/icons";

import Comments from '../Comments/Comments'
import AddComment from "../Comments/ComentItem";
import { productsContext } from "../../contexts/productsContext";
import { cartContext } from "../../contexts/cartContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";


import "./DetailsProduct.css";
// import ProductCard from "./ProductList/ProductCard";

const DetailsProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const [product, setProduct] = useState(null);

  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(id));


  const { addProductToFavorites, checkItemInFavorites } = useContext(FavoritesContext);
  const [checkInFavorites, setCheckInFavorites] = useState(checkItemInFavorites(id));

  useEffect(() => {
    setCheckInCart(checkItemInCart(id))
    setCheckInFavorites(checkItemInFavorites(id))
  }, [id, checkItemInCart, checkItemInFavorites])

//  ProductCard({item})

  useEffect(() => {
    getOneProduct(id);
  }, []);


  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      { product? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "35vw", border: "1px solid black" ,alignSelf:"start" }}>
              <Carousel 
               autoplay>
                <div>
                  <img width="100%" src={product.image1} alt="" />
                </div>
                <div>
                  <img width="100%" src={product.image2} alt="" />
                </div>
              </Carousel>
            </div>
            <div style={{ width: "40vw" }}>
              <h2>{product.brand}</h2>
              <h3>{product.model}</h3>
              <h2>{"$" + product.price}</h2>
              <Button
                size="large"
                style={{ margin: "15px 0px", width: "100%" }}
                onClick={() => addProductToCart(product)}
          
              >
                {checkItemInCart(product.id) ? 'REMOVE FROM CART' : 'ADD TO CART'}
              </Button>
              <Button
                size="large"
                style={{ margin: "15px 0px", width: "100%" }}
                onClick={() => addProductToFavorites(product)}
              >
                {checkItemInFavorites(product.id) ? 'REMOVE FROM FAV' : 'ADD TO FAVORITES'}
              </Button>
              
                <HeartOutlined
                style={{ margin: "15px 0px", width: "100%", fontSize:"30px" }}
                />
              
              <div>{product.description}</div>
            </div>
          </div>
          <AddComment id={product.id}/>
          <Comments id={product.id} />
          
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailsProduct;
