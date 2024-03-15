"use client";
import React, { useState } from "react";
import BarcodeGenerator from "./barcode";

const BarContainer = () => {
  const [price, setPrice] = useState(0);

  const handlePriceChange = (event) => {
    setPrice(event.target.value === "" ? 0 : event.target.value );
    console.log(event.target.value)
  };

  return (
    <>
      <input
        type="text"
        value={price}
        onChange={handlePriceChange}
        placeholder="Enter price"
      />
      <BarcodeGenerator price={price} />
    </>
  );
};

export default BarContainer;
