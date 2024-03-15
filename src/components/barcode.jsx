"use client";
import React from "react";
import { useBarcode } from "next-barcode";

const BarcodeGenerator = ({ price }) => {
  const { inputRef } = useBarcode({
    value: price,
    options: {
      format: "CODE128",
      lineColor: "#000",
      width: 2,
      height: 40,
      displayValue: true,
    },
  });

  return <svg id="barcode" ref={inputRef}></svg>;
};

export default BarcodeGenerator;
