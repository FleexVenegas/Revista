import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import React, { useState } from "react";
import Pdfview from "./Pdfview";
import VistaWeb from "./VistaWeb";

const ViewPdf = () => {
  const [verPDF, setVerPDF] = useState(false);
  const [verWeb, setVerWeb] = React.useState(false);

  return (
    <div style={{ minHeight: "100vh" }}>
      <nav>
        <button
          onClick={() => {
            setVerWeb(!verWeb);
            setVerPDF(false);
          }}
        >
          {verWeb ? "Ocultar web" : "Ver web"}
        </button>
        <button
          onClick={() => {
            setVerPDF(!verPDF);
            setVerWeb(false);
          }}
        >
          {verPDF ? "Ocultar pdf" : "Ver pdf"}
        </button>
        <PDFDownloadLink document={<Pdfview />} fileName="Poema.pdf">
          <button>Descargar pdf</button>
        </PDFDownloadLink>
      </nav>

      {verWeb ? <VistaWeb /> : null}
      {verPDF ? (
        <div className="flex justify-center">
        <PDFViewer style={{ width: "90%", height: "90vh"}}>
          <Pdfview />
        </PDFViewer>
        </div>
      ) : null}
    </div>
  );
};

export default ViewPdf;
