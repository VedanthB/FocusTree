import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header>
      <nav className="topnav flex justify-between shadow">
        <input id="nav-toggle" className="invisible" type="checkbox" />
        <Link to="/" className="text-md logo" style={{ color: "#4E9F3D" }}>
          <img
            src="https://res.cloudinary.com/supertramp69420/image/upload/v1651384920/focus/focusTree_dzqj4f.png"
            alt="focusTree-logo"
            className="h-6 w-6"
            style={{ color: "#4E9F3D" }}
          />
          <span className="text-xl ">FocusTree</span>
        </Link>
        <ul className="links">
          <li>
            <Link
              style={{ color: "#4E9F3D" }}
              className="text-hover-green-400 text-md mr-4"
              to="/tasks"
            >
              Tasks
            </Link>
          </li>

          <li>
            <Link
              className="text-hover-green-400 flex justify-center align-items-center text-md"
              to="/"
              style={{ color: "#4E9F3D" }}
            >
              <i className="fab fa-github mr-2"></i>
              Github
            </Link>
          </li>

          <li>
            <div className="btn">
              <span
                onClick={() =>
                  theme === "light" ? setTheme("dark") : setTheme("light")
                }
              >
                {theme === "light" ? (
                  <i
                    onClick={() =>
                      theme === "light" ? setTheme("dark") : setTheme("light")
                    }
                    className="fa-solid fa-moon text-blue-500 text-hover-blue-400"
                  ></i>
                ) : (
                  <i
                    onClick={() =>
                      theme === "light" ? setTheme("dark") : setTheme("light")
                    }
                    className="fa-solid fa-sun text-amber-500 text-hover-amber-400"
                  ></i>
                )}
              </span>
            </div>
          </li>
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
          <div style={{ backgroundColor: "black" }} className="line"></div>
          <div style={{ backgroundColor: "black" }} className="line"></div>
          <div style={{ backgroundColor: "black" }} className="line"></div>
        </label>
      </nav>
    </header>
  );
};

export default Header;
