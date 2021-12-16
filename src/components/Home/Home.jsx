import React from "react";
import "./Home.css";
<<<<<<< HEAD
import { Card } from "antd";
import { Carousel } from "react-bootstrap";
=======
import { Card , Carousel } from "antd";
// import { Carousel } from "react-bootstrap";
>>>>>>> 053a03af5d177fa381e9eae9e4f43364b3872a9a
// import 'bootstrap/dist/css/bootstrap.min.css';


const { Meta } = Card;
const Home = () => {
<<<<<<< HEAD
  return (
    <div className="container">
      <Carousel fade >
        <Carousel.Item >
          <img className='carusel'
            className="d-block w-100 carusel"
            src="https://9to5mac.com/wp-content/uploads/sites/6/2020/05/2020-13-inch-MacBook-Pro.png    "
            alt="First slide"
          />
          <Carousel.Caption >
            <h3 >MacBook Pro</h3>
            <p>
              M1 Max — невероятно мощный чип для ноутбуков профессионального
              уровня. Он оснащается 10‑ядерным процессором, графическим
              процессором до 32 ядер и 16‑ядерной системой Neural Engine.
              Скорость обработки графики и пропускная способность памяти у этого
              чипа вдвое больше, чем у M1 Pro. Кодирование видео происходит до 2
              раз быстрее, поскольку в M1 Max установлено два медиапроцессора
              для кодирова­ния и отдельный медиапроцессор для декодирова­ния, а
              два ускорителя ProRes помогают при работе с несколькими потоками
              видео.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100 carusel"
            src="https://ru.gecid.com/data/nouts/202008170800-60878/img/01_acer_aspire_7_a715-41g.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Acer Aspire 7 A715-41G</h3>
            <p>
              Acer Aspire 7 A715-41G приехал к нам на тестирование в одной из
              самых доступных модификаций NH.Q8LEU.004, стоимость которой на
              данный момент с учетом акционных предложений крупнейших
              интернет-магазинов составляет 19 999 грн. ($728). Ее оснащение
              включает в себя 4-ядерный 8-поточный процессор AMD Ryzen 5 3550H с
              интегрированной графикой Radeon Vega 8, дискретную видеокарту
              NVIDIA GeForce GTX 1650 с видеопамятью GDDR6, 8 ГБ оперативной
              памяти и твердотельный накопитель объемом 512 ГБ. В теории такая
              конфигурация должна хорошо справляться с играми в Full HD и
              большинством рабочих задач. Так ли это на самом деле? Давайте
              разбираться.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carusel"
            src="https://images.firstpost.com/wp-content/uploads/2021/05/Asus-S17.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>OG Zephyrus S17</h3>
            <p>
              Asus Republic of Gamers (ROG) «Для тех, кто осмелится: выпустить
              на волю тигра изнутри». Согласно пресс-релизу, на этом мероприятии
              во всем мире были представлены два новых игровых ноутбука, а
              именно ROG Zephyrus S17 оснащен процессором Intel Core i9-11900H
              11-го поколения и оптико-механической клавиатурой, обеспечивающей
              превосходное охлаждение. Клавиатура поднята под углом 5 градусов,
              что позволяет новым вентиляторам Arc Flow подавать охлаждающий
              воздух в ноутбук. Он оснащен мощным звуком с шестью динамиками.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carusel"
            src="https://www.ixbt.com/img/n1/news/2021/3/4/anons_xiaomi_mi_notebook_pro_14_i_pro_15_premium_noutbuki_v_metalle_picture2_0_large.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Xiaomi Mi Laptop Pro 15</h3>
            <p>
              Xiaomi Mi Laptop Pro 15” оснащён процессорами Intel Core 11-го
              поколения: Core i5 в стандартной комплектации или Core i7. В обоих
              случаях установлен графический процессор GeForce MX450 с 2 ГБ
              видеопамяти. Охлаждение осуществляется двумя вентиляторами. Этот
              ноутбук соответствует строгим требованиям сертификации платформы
              Intel Evo Platform.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
=======
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
    <div>
      <h3 style={contentStyle}>
      <img
      src="https://images.firstpost.com/wp-content/uploads/2021/05/Asus-S17.jpg"
       />
      </h3>
    </div>
    
  </Carousel>,
      
>>>>>>> 053a03af5d177fa381e9eae9e4f43364b3872a9a

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
<<<<<<< HEAD
=======
    </div>
>>>>>>> 053a03af5d177fa381e9eae9e4f43364b3872a9a
  );
};

export default Home;