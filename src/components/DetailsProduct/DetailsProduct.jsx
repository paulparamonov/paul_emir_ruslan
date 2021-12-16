import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> 053a03af5d177fa381e9eae9e4f43364b3872a9a

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
<<<<<<< HEAD
    <div className="container" style={{ marginTop: "20px" }}>
=======
    <div className="container" style={{ marginTop: "80px" }}>
>>>>>>> 053a03af5d177fa381e9eae9e4f43364b3872a9a
      { product? (
        <>
          <div
            style={{
              display: "flex",
<<<<<<< HEAD
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "35vw", border: "1px solid black" ,alignSelf:"start" }}>
=======
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
              
            }}
          >
            <div className="item-image" style={{ maxWidth: "35vw", border: "1px solid black" ,alignSelf:"start" }}>
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
            <div style={{
              display: "flex",
              flexDirection:"column",
              justifyContent: "center",
              alignItems:"center",
               width: "40vw",
               marginLeft:"50px"
                }}>
            <div className="item-imag" style={{ width: "35vw", border: "1px solid black" ,alignSelf:"start" }}>
>>>>>>> 053a03af5d177fa381e9eae9e4f43364b3872a9a
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
<<<<<<< HEAD
            <div style={{ width: "40vw" }}>
              <h2>{product.brand}</h2>
              <h3>{product.model}</h3>
=======
              <h2>{product.brand}</h2>
              <h3>{product.model}</h3>
              
>>>>>>> 053a03af5d177fa381e9eae9e4f43364b3872a9a
              <h2>{"$" + product.price}</h2>
              <Button
                size="large"
                style={{ margin: "15px 0px", width: "100%" }}
                onClick={() => addProductToCart(product)}
          
              >
                {checkItemInCart(product.id) ? 'REMOVE FROM CART' : 'ADD TO CART'}
              </Button>
              <Button
<<<<<<< HEAD
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
=======
                // size="large"
                style={{ margin: "15px 0px", width: "100%" }}
                onClick={() => addProductToFavorites(product)}
              >
                {checkItemInFavorites(product.id) ? 'REMOVE FROM FAV' : 'ADD TO FAV'}
              </Button>
              <Link to="/payment">
              <Button
                // size="large"
                style={{ margin: "15px 0px", width: "100%" }}
                onClick={() => addProductToCart(product)}
              >
                BUY
              </Button>
              </Link>
              
                {/* <HeartOutlined
                style={{ margin: "15px 0px", width: "100%", fontSize:"30px" }}
                /> */}
                <span id={product.id} class="likebtn-wrapper" data-lang="ru" data-identifier={product.id}> </span>
              
              <div  className="desc" style={{textOverflow:"ellipsis",}}>{product.description}</div>
>>>>>>> 053a03af5d177fa381e9eae9e4f43364b3872a9a
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
