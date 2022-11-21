import React, { useState } from "react";
import baneer01 from "../data/Revista01.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { ViewPdf, ContainerPDF } from "../components";

const Pdf = () => {
  const { search } = useLocation();
  const revista = search.slice(1)
  return (
    <>
      <ContainerPDF mostrar={revista}/>
    </>
  );
};

export default Pdf;
