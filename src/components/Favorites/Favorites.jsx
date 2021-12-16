import React, { useContext, useEffect } from "react";
import { List } from "antd";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import FavoritesItem from "./FavoritesItem";

const Favorites = () => {
  const { getFavorites, favorites } = useContext(FavoritesContext);
  useEffect(() => {
    getFavorites();
  }, []);
  console.log(Favorites);
  return (
<<<<<<< HEAD
    <div className="container">
=======
    <div className="container" style={{marginTop:"35px"}}>
>>>>>>> 053a03af5d177fa381e9eae9e4f43364b3872a9a
      <List
        itemLayout="vertical"
        size="large"
        dataSource={favorites?.products}
        footer={<h2>Total: {favorites?.totalPrice}$</h2>}
        renderItem={(item) => <FavoritesItem item={item} />}
      />
    </div>
  );
};

export default Favorites;
