import React, { useContext, useEffect } from "react";
import { Select, Slider } from "antd";
import './F.css'

const Filters = ({  price, setPrice }) => {
  useEffect(() => {
  }, []);
  return (
    <div style={{ marginTop: "20px" }}>
     
      <Slider
      className="f"
        value={price}
        onChange={(e) => setPrice(e)}
        range
        defaultValue={[1, 10000]}
        min={0}
        max={10000}
        step={100}
      />
    </div>
  );
};

export default Filters;
