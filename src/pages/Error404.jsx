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
      {/* <addMap /> */}
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
       
    </div>
  );
};
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default Error404;
