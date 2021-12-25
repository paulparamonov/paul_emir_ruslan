import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Badge, Button} from "antd";
import {  ContactsOutlined  , MenuOutlined, TagOutlined,BookOutlined  } from "@ant-design/icons";
import  Menu  from "./Menu";

import { useAuth } from "../../contexts/authContext";
import { cartContext } from "../../contexts/cartContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";

import "./Header.css";
// import { Button } from "bootstrap";s

const Header = () => {
  const location = useLocation();
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  const { getCart, cartLength } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  const { getFavorites, favoritesLength } = useContext(FavoritesContext);
  useEffect(() => {
    getFavorites();
  }, []);
  const [menuActive, setMenuActive]=useState(false)
  const NAV_ITEMS = [

    {
      title: "Ticket",
      link: "/products",
      id: 2,
    },
    
  ];
  return (
    <div className="nav_over">
      <nav>
      <div className="logo">
        {/* <div className="burger-menu">
        
        <ArrowLeftOutlined 
          style={{ fontSize: "30px", cursor: "pointer" ,color:"white"}}
        />
        </div> */}
        <MenuOutlined
          className="btn-burger" 
          style={{ fontSize: "30px", cursor: "pointer" ,color:"white"}}
          onClick={()=>setMenuActive(!menuActive)}
        />
        <Link  style={{ textDecoration:'none'}} to="/">
          <h1 className="home">Home</h1>
        </Link>
        <div className="auth-icon navbar" >
          {email ? (
            <Link to="/auth">
              <Button  className="logout-btn btnn" style={{cursor: "pointer"}} onClick={handleLogout}>
              Log out
              </Button>
            </Link>
          ) : null}

          {email ? null : (
            <Link to="/auth">
              <button className="sign-btn">
              <ContactsOutlined 
               style={{cursor: "pointer"}}/>
              </button>
            </Link>
          )}
        </div>
        <div className="cart">
        <Link to="/cart">
            <Badge count={+cartLength}>
              <TagOutlined 
                style={{ fontSize: "30px", cursor: "pointer" ,color:"white", marginTop:'15px'}}
              ></TagOutlined>
              
            </Badge>
          </Link>
        </div>
        <div className="favorites">
        <Link to="/favorites">
            <Badge count={+favoritesLength}>
              <BookOutlined
                style={{ fontSize: "25px", cursor: "pointer" ,color:"white",  marginTop:'15px'}}
              />
            </Badge>
          </Link>

        </div>
        <div className="navbar">
        {email === "emir6816@gmail.com" ? (
          <Link
            className={
              location.pathname === "/admin"
                ? "navbar__item-active"
                : "navbar__item"
            }
            to="/admin"
          >
             <Button className="btnn">Adminka</Button>
          </Link>
        ) : null}
        

      </div>
      

          
      </div>
      <p className="greetings">
      Welcome, {email ? (
       <span>{email}</span>
          ) : 
          <span>Гость</span>}
          </p>
      {NAV_ITEMS.map((item) => (
          <Link
            to={item.link}
            className={
              location.pathname === item.link
                ? "navbar__item-active"
                : "navbar__item"
            }
          >
            <Button className="btnn">{item.title}</Button>
          </Link>
        ))}
      <div className="right-nav">
      

        
        </div>
      </nav>
      <Menu className="burger-menu"
       active={menuActive} setActive={setMenuActive}  items={NAV_ITEMS}/>
      
      
    </div>
  );
};

export default Header;
