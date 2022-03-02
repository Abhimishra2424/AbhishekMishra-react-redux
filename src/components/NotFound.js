import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: "2rem",
    color: "red",
    flexDirection: "column",
  };

  const btnStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
    padding: "1rem",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "1rem",
  };

  return (
    <div style={style}>
      404 Page Not Found
      <div style={btnStyle}>
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};
