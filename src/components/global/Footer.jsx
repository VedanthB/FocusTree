import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#D8E9A8" }}
      className="text-white flex flex-col justify-center align-items-center w-full p-5 z-50 bg-green-100"
    >
      <div className="text-grey-700">
        Made with
        <span className="text-green-700 font-bold ml-1 mr-1">
          &lt;/&gt;{" "}
        </span>{" "}
        by
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/VedanthB"
          style={{ padding: "0", textTransform: "none" }}
          className="ml-1 btn btn-link-green"
        >
          vedanth
        </a>
      </div>
      <div className="flex mt-3 align-items-center justify-center">
        <a target="_blank" rel="noreferrer" href="https://github.com/VedanthB">
          <i className="fab fa-github mr-2 text-green-700"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/vedanth_X0X0"
        >
          <i className="fab fa-twitter mr-2 text-green-700"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/vedanth-bora/"
        >
          <i className="fab fa-linkedin mr-2 text-green-700"></i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://dev.to/vedanthb">
          <i className="fab fa-dev text-green-700"></i>
        </a>
      </div>
      <div className="text-grey-700 mt-3">
        Designed using
        <a
          target="_blank"
          rel="noreferrer"
          href="https://argon-css.netlify.app/"
          style={{ padding: 0, textTransform: "none" }}
          className="ml-1 btn btn-link-green"
        >
          Argon CSS
        </a>
      </div>
    </footer>
  );
};

export default Footer;
