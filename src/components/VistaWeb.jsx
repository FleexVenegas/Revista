import React from "react";

const VistaWeb = () => {
  const lorem = "lorem ipsu sd sd sdasddfd adfaf ";
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "#3388af", fontSize: "42px" }}>El cuento jamas</h1>
        <p>Lorem ipsum dolor sit</p>
        <img
          src="https://picsum.photos/600/400"
          style={{ maxWidth: "600px", maxHeight: "400" }}
        ></img>
        <p
          style={{
            color: "gray",
            fontStyle: "italic",
            fontSize: "10px",
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          itaque blanditiis cumque recusandae tempora harum assumenda amet,
          aperiam delectus maiores?
        </p>
        <p style={{ maxWidth: "50ch" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
          distinctio enim libero dicta laboriosam ea?
        </p>
      </div>
    </>
  );
};

export default VistaWeb;
