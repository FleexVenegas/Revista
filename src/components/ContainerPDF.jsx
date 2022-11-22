import React, { useEffect, useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ContainerPDF = ({ mostrar }) => {
  const PDF = "/" + mostrar + ".pdf";

  const renderToolbar = (Toolbar) => (
    <Toolbar>
      {(slots) => {
        const {
          CurrentPageInput,
          Download,
          EnterFullScreen,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          Print,
          ShowSearchPopover,
          Zoom,
          ZoomIn,
          ZoomOut,
        } = slots;
        return (
          <div className="flex items-center w-full">
            <div style={{ padding: "0px 2px" }}>
              <ShowSearchPopover />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomOut />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <Zoom />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomIn />
            </div>
            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <GoToPreviousPage />
            </div>
            <div
              style={{
                padding: "0px 2px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CurrentPageInput /> / <NumberOfPages />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <GoToNextPage />
            </div>
            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <EnterFullScreen />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <Download />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <Print />
            </div>
          </div>
        );
      }}
    </Toolbar>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
  });

  const [visualizarPDF, setVisualizarPDF] = useState(true);

  useEffect(() => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setVisualizarPDF(false);
    } 
  }, []);

  return (
    <>
      {visualizarPDF ? (
        <main className="m-auto w-1000 h-screen">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
            <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl={PDF} />
          </Worker>
        </main>
      ) : (
        <main className="flex dark:bg-gray-600 dark:text-white m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl justify-center opacity-80">
          <div className="p-5 bg-slate-100 dark:bg-gray-500 rounded-2xl">
            <p className="pb-5">
              Lo sentimos pero no se puede ver la revista en un dispositivo movil.
            </p>
            <a
              href={PDF}
              download
              className="mt-10 bg-orange-500 p-2 rounded-md"
            >
              Descargar
            </a>
          </div>
        </main>
      )}
    </>
  );
};

export default ContainerPDF;
