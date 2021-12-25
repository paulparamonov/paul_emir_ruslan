import React, { useContext ,useState, useEffect} from "react";
import { List, InputNumber, Button } from "antd";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { cartContext } from "../../contexts/cartContext";
import { useParams } from "react-router";
import { productsContext } from "../../contexts/productsContext";

const FavoritesItem = ({ item }) => {
  // console.log(item);
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const [product, setProduct] = useState(null);

  const { deleteFromFavorites, changeProductCount } = useContext(FavoritesContext);
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(id));

  useEffect(() => {
    setCheckInCart(checkItemInCart(id))
  }, [id, checkItemInCart])

  useEffect(() => {
    getOneProduct(id);
  }, []);


  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

  return (
    <List.Item
      key={item.id}
      extra={<img width={100} alt="img" src={item.item.image1} />}
    >
      <List.Item.Meta
      
        description={
          <>
          
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "40%",
                marginTop: "20px",
                alignItems: 'center'
              }}
            >
            
              <div>
                <h4>Цена</h4>
                <h3>{"$" + item.subPrice}</h3>
              </div>
            </div>
            <Button onClick={() => deleteFromFavorites(item.item.id)}>
              Delete
            </Button>
            <Button
                onClick={() => addProductToCart(item.item)
          }>
                {checkItemInCart(item.item.id) ? 'Delete' : 'Add bay'}
            </Button>
          </>
        }
      />
    </List.Item>
  );
};

export default FavoritesItem;
