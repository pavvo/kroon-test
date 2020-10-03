import React from "react";
import "../index.css";

const Loading = () => {
  return (
    <div
      className="root"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255)",
        zIndex: 9999,
        fontSize: "32px",
      }}
    >
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
