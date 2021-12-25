import React from "react";
import "./Home.css";
import { Card } from "antd";
import { Carousel } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const { Meta } = Card;
const Home = () => {

  // const contentStyle = {
  //   height: 'auto',
    
  //   lineHeight: '160px',
  //   textAlign: 'center',
    
  
  return (
    
    <div className="home-body">
    <div className="container">

  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.total.kz/storage/74/746f776f1ec555dd85223ce0d4147843.png"
      alt="First slide"
    />
    <Carousel.Caption>
    <Link  style={{ textDecoration:'none'}} to="/products">
          <a class="btne">Go tickets</a>
        </Link>

      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images6.alphacoders.com/319/thumb-1920-319803.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <Link  style={{ textDecoration:'none'}} to="/products">
          <a class="btne">Go tickets</a>
        </Link>

      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis ullam deleniti laudantium tempore provident alias doloribus et corporis. Culpa tenetur voluptatem repudiandae natus qui minima ipsam quibusdam adipisci illum!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://avatars.mds.yandex.net/get-zen_doc/175962/pub_5bb322032119b800acc05199_5bb322c078a80a00a969480d/scale_1200"
      alt="Third slide"
    />

    <Carousel.Caption>
    
    <Link  style={{ textDecoration:'none'}} to="/products">
          <a class="btne">Go tickets</a>
        </Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam reiciendis commodi nisi itaque, in ipsa aspernatur mollitia beatae corrupti doloribus sequi vitae dolor neque facilis reprehenderit porro quibusdam asperiores quidem?</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<section class="section  section--map">
        <div class="container">
            <div class="map">
                <h2 class="map__title">
                    <div><i class="fas fa-map-marker-alt"></i></div>
                    <a href="https://goo.gl/maps/F8YpeCGqwrG2" target="_blank">Open Map</a>
                </h2>
            </div>
        </div>
    </section>

    
    
    



    </div>
    <div class="works">
            <div class="works__col">
                <div class="works__item">
                    <img class="works__image" src="https://images6.alphacoders.com/310/thumb-1920-310232.jpg" alt=""/>
                    <div class="works__info">
                        <div class="works__title">MKC</div>
                        <div class="works__text">Международная космическая станция – крупнейший научно-технический проект современности. В нем участвуют 16 стран: Россия, США, Япония, Канада, Италия, Бельгия, Нидерланды, Дания, Норвегия, Франция, Испания, Германия, Швеция, Швейцария, Великобритания и Бразилия</div>
                    </div>
                </div>
                <div class="works__item">
                    <img class="works__image" src="https://images3.alphacoders.com/115/thumb-1920-1158653.jpg" alt=""/>
                    <div class="works__info">
                        <div class="works__title">Черные дыры</div>
                        <div class="works__text">Черная дыра — это область внутри космоса с настолько сильной гравитацией, что она засасывает все вокруг, включая свет. Профессор РАН Сергей Попов объясняет, что у черных дыр нет одного четкого определения, и даже такое — это один из вариантов. Если спросить разных ученых — астрофизиков и физиков — они подойдут к ответу с разных сторон. Есть энциклопедические словари, которые закрепляют определения и дают конкретные ответы, но единственно верной формулировки не существует.

</div>
                    </div>
                </div>
            </div>

          

            <div class="works__col">
                <div class="works__item1">
                    <img class="works__image1" src="https://images3.alphacoders.com/956/thumb-1920-9565.jpg" alt=""/>
                    <div class="works__info">
                        <div class="works__title">Земля</div>
                        <div class="works__text">Земля́
планета Солнечной системы, третья по порядку от Солнца. Обращается вокруг него по эллиптической, близкой к круговой орбите (с эксцентрисистетом 0,017), со ср. скоростью ок. 30 км/с. Ср. расстояние Земли от Солнца 149,6 млн. км, период обращения 365,24 ср. солнечных суток (тропический год). На ср. расстоянии 384,4 тыс. км от Земли вокруг неё вращается естественный спутник Луна. Земля вращается вокруг своей оси (имеющей наклон к плоскости эклиптики, равный 66°33 22) за 23 ч 56 мин (звёздные сутки). С вращением Земли вокруг Солнца и наклоном земной оси связана смена на Земле времён года, а с вращением её вокруг оси – смена дня и ночи.</div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  );
};

export default Home;