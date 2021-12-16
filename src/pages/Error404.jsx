import React from "react";
import ReactDOM from "react-dom";
// import addMap from "../components/addMap";
import * as serviceWorker from "../components/Map/serviceWorker";
import { Link } from "react-router-dom";

import {  Button } from "antd";
// serviceWorker.unregister();
const Error404 = () => {
  return (
    <div className="container">
<<<<<<< HEAD
      {/* <addMap /> */}
          <Link to="/">
            <Button type="primary">Back Home</Button>
=======
    <div className="map-container">
      <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.886888643009!2d74.58321895049657!3d42.8752315103024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec83d9955c4b5%3A0x5d36dcab420bc180!2sSoftech.kg!5e0!3m2!1sru!2skg!4v1639587977063!5m2!1sru!2skg" style={{width:"100vw"}} ></iframe>
      </div>
          <Link to="/">
            <Button type="primary" style={{marginLeft:"50px"}}>Back Home</Button>
>>>>>>> 053a03af5d177fa381e9eae9e4f43364b3872a9a
          </Link>
       
    </div>
  );
};
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default Error404;
