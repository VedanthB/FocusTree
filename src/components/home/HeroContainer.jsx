import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context";

const HeroContainer = () => {
  const { theme } = useTheme();

  return (
    <section className="w-full justify-between  h-full homePage__hero__container">
      <div className="flex justify-center align-items-center">
        <h2
          style={{ color: `${theme === "light" ? "black" : "white"}` }}
          className="h2 p-14"
        >
          Focus
          <span
            style={{
              padding: 0,
              textTransform: "none",
              fontWeight: "300",
              fontSize: "3.75rem",
              lineHeight: "1.2",
            }}
            className="ml-1 h2 btn btn-link-green"
          >
            Tree
          </span>
          <div
            style={{ color: `${theme === "light" ? "black" : "white"}` }}
            className="h4 pt-14 pr-14"
          >
            stay focused, be present
          </div>
          <div className="spacer-3rem"> </div>
          <Link to="/tasks" className="btn btn-solid-green text-white">
            start focusing
          </Link>
        </h2>
      </div>

      <div className="flex justify-center align-items-center p-14">
        <img
          src="https://res.cloudinary.com/supertramp69420/image/upload/v1651230740/focus/Mask_group_esxkid.svg"
          alt="hero-img"
        />
      </div>
    </section>
  );
};

export default HeroContainer;
