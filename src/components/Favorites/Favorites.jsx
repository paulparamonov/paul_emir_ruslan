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
    <div className="container" style={{marginTop:"35px"}}>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={favorites?.products}
        footer={<h2>Итог: {favorites?.totalPrice}$</h2>}
        renderItem={(item) => <FavoritesItem item={item} />}
      />
    </div>
  );
};

export default Favorites;
