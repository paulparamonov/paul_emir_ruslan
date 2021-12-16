import React, { useContext, useEffect } from "react";
import { Card } from "antd";

import { brandsContext } from "../../contexts/brandsContext";

const BrandsList = () => {
  const { getBrands, brands } = useContext(brandsContext);
  useEffect(() => {
    getBrands();
  }, []);
  //   console.log(brands);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
<<<<<<< HEAD
        marginTop: "20px",
=======
        marginTop: "50px",
>>>>>>> 053a03af5d177fa381e9eae9e4f43364b3872a9a
      }}
    >
      {brands.map((item) => (
        <Card
          hoverable
<<<<<<< HEAD
          style={{ width: "240px", height: "240px", margin: "10px" }}
=======
          style={{ width: "240px", height: "240px", margin: "10px"  }}
>>>>>>> 053a03af5d177fa381e9eae9e4f43364b3872a9a
          cover={<img alt="example" src={item.logo} />}
        />
      ))}
    </div>
  );
};

export default BrandsList;
