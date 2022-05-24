import React from "react";
import { BannerContainer, HeroContainer } from "../components";

const Home = () => {
  return (
    <div style={{ minHeight: "90vh", top: "3rem" }} className="relative">
      <HeroContainer />

      <BannerContainer />
    </div>
  );
};

export default Home;
