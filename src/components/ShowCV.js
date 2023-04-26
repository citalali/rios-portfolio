import React from "react";
import { Document } from "react-pdf";

const ShowCV = () => {
  return (
    <div>
      <Document file="./RioPajakCV.pdf"></Document>
    </div>
  );
};

export default ShowCV;
