import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1> Not Found ... 404</h1>
      <span role="img" aria-label="emoji">
        🥺
      </span>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
