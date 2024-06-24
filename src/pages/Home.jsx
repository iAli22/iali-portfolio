import React from "react";
import { World, Header } from "../components";
import { MainContent } from "../containers";

const Home = function () {
  return (
    <>
      <World />
      <div className="container">
        <Header />
        <MainContent />
      </div>
    </>
  );
};

export default Home;
