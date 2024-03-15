"use client";
import React, { useState } from "react";
import BarcodeGenerator from "./barcode";
import ExportSVGButton from "./ExportSVG";

const BarContainer = () => {
  const [price, setPrice] = useState(null);

  const handlePriceChange = (event) => {
    setPrice(event.target.value === "" ? null : event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <input
        className="form-input mt-1 block w-full p-2 border rounded-md bg-blue-50 border-blue-300 text-blue-900 placeholder-blue-300 focus:border-blue-500 focus:bg-white focus:ring-0"
        type="text"
        value={price}
        onChange={handlePriceChange}
        placeholder="Escribe el precio"
      />
      {price !== null && (
        <>
          <BarcodeGenerator price={price} />
          <ExportSVGButton svgId={"barcode"} />
        </>
      )}
    </>
  );
};

export default BarContainer;
