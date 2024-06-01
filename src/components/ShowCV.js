import React from "react";
import { Document } from "react-pdf";

const ShowCV = () => {
  return (
    <div>
      <Document file="./R.Pajak-CV-2024.pdf"></Document>
    </div>
  );
};

export default ShowCV;
