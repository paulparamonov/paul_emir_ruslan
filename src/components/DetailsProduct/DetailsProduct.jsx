import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { Carousel, Button  } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import {  ContactsOutlined  , MenuOutlined, TagOutlined,BookOutlined  } from "@ant-design/icons";


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
    <div className="container" style={{ marginTop: "80px" }}>
      { product? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
              color: "white",
              
            }}
          >
        
            <div style={{
              display: "flex",
              flexDirection:"column",
              justifyContent: "center",
              alignItems:"center",
               width: "40vw",
               marginLeft:"50px"
                }}>
                  
                  <div  className="desc" style={{textOverflow:"ellipsis",}}>{product.description}</div>
                <span>

                  <TagOutlined
                    size="large"
                    style={{ margin: "5px 15px", width: "160px" , fontSize: '40px'}}
                    onClick={() => addProductToCart(product)}
              
                  >
                    {checkItemInCart(product.id) ? 'Back' : 'Add to basket '}
                  </TagOutlined>
                  <Link to="/products">

                  <MenuOutlined
                    size="large"
                    style={{ margin: "5px 15px", width: "160px" , fontSize: '40px'}}
                    
              
                  >
                    {checkItemInCart(product.id) ? 'Back' : 'Add to basket '}
                  </MenuOutlined>
                </Link>
                  <BookOutlined
                    size="large"
                    style={{ margin: "5px 15px", width: "160px", fontSize: '40px', color:"white !impotent"}}
                    onClick={() => addProductToFavorites(product)}
                  >
                    {checkItemInFavorites(product.id) ? 'Back' : 'Add to beloved'}
                  </BookOutlined>
                  </span>
                  <Link to="/payment">
                  <Button
                    // size="large"
                    style={{ margin: "15px 0px", width: "100%" }}
                    onClick={() => addProductToCart(product)}
                  >
                    Go to pay
                  </Button>
                  </Link>
            <div className="item-imag" style={{ width: "35vw" ,alignSelf:"start" }}>
           
            </div>
              <h3>{product.name__uni}</h3>
               <h2>{"$" + product.price}</h2>
            
              
              
            </div>
          <AddComment className='addcomi' id={product.id}/>
          </div>
          <Comments className='comi'  id={product.id} />
          
        </>
      ) : (
        <h2>Загрузка, 
          подождите</h2>
      )}
    </div>
  );
};

export default DetailsProduct;
