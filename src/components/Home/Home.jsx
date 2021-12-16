import React from "react";
import "./Home.css";
import { Card } from "antd";

import {  Carousel } from "antd";
// import { Carousel } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';


const { Meta } = Card;
const Home = () => {

  const contentStyle = {
    height: 'auto',
    
    lineHeight: '160px',
    textAlign: 'center',
    
  };
  return (
    <div className="home-body">
    <div className="container">
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img
      src="https://9to5mac.com/wp-content/uploads/sites/6/2020/05/2020-13-inch-MacBook-Pro.png    "
       /></h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img
      src="https://ru.gecid.com/data/nouts/202008170800-60878/img/01_acer_aspire_7_a715-41g.jpg"
       />
      </h3>
    </div>
    
    
  </Carousel>,
      

      <div className="img">
        <a>
          <img
            style={{ width: "100px" }}
            src='https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-256.png'
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "100px" }}
            src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/samsung-256.png"
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "100px" }}
            src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/asus-256.png"
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "100px" }}
            src="https://cdn0.iconfinder.com/data/icons/logos-21/40/HP-256.png"
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "100px" }}
            src="https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/388_Xiaomi_logo-256.png"
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "100px" }}
            src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/lenovo-256.png"
            alt=""
          />
        </a>
       
      </div>
      <div className="link">
        <a
          style={{ display: "flex", justifyContent: "center", color: "black" }}
        >
          RECOMENDED FOR YOU
        </a>
      </div>
      <div className="cards">
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
            className='recom_img'
              alt="example"
              src="https://newsline.news/wp-content/uploads/2021/08/ASUS-ROG-Zephyrus-M16Performance-and-convenience-16-inch-screen.jpeg"
            />
          }
        >
          <Meta title="ASUS ROG Zephyrus M16" description="Модель с графикой NVIDIA GeForce RTX 3060 6 ГБ оснащена 16 ГБ ОЗУ и 1 ТБ SSD" />
        </Card>
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img 
            className='recom_img'

              alt="example"
              src="https://www.bosshunting.com.au/wp-content/uploads/2020/11/apple-macbook-feature-1200x640.jpg"
            />
          }
        >
          <Meta title="MacBook Pro 13 M1" description="Apple MacBook Pro 13 M1 -core GPU, 16 ГБ, 256 ГБ SSD, CTO" />
        </Card>
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
            className='recom_img'

              alt="example"
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5190/5190001cv18d.jpg"
            />
          }
        >
          <Meta title="HP - Spectre 13.3 " description="Core i7-1165G7 Processor, 16 GB RAM, 512 GB SSD Storage, Full HD IPS micro-edge Display, Windows 10 Pro" />
        </Card>
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
            className='recom_img'
            
              alt="example"
              src="https://xiaomiplanet.sk/wp-content/uploads/2021/09/xiaomi-mi-notebook-pro-x-14-cover.jpg"
            />
          }
        >
          <Meta title="	Xiaomi 1 14 Laptop" description=" 1 Laptop, 14.0 HD (1366 x 768) Display, Intel Celeron N4020 Processor, 4GB DDR4 RAM, 64 GB SSD Storage, Intel UHD Graphics 600, Windows 11" />
        </Card>
      </div>
    </div>
    </div>
  );
};

export default Home;