import React from "react";

import { Link } from "react-router-dom";
import { useTheme } from "../../context";

export const TaskCard = ({ id }) => {
  const { theme } = useTheme();

  return (
    <Link
      to={`/tasks/${id}`}
      className={`flex flex-col shadow-xl p-4 bg-green-500 cursor-pointer task__card`}
      style={{
        border: "1px solid gray",
      }}
    >
      <div className={`flex justify-between`}>
        <h3
          style={{
            height: "3rem",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
          className={`text-white pr-3`}
        >
          This is a taskThis This is a taskThis This is a taskThis This is a
          taskThis This is a taskThis This is a taskThis This is a taskThis This
          is a taskThis This is a taskThis This is a taskThis This is a taskThis
          This is a taskThis
        </h3>

        <i
          className={`fa-solid fa-pen-to-square ${
            theme === "light"
              ? "text-white text-hover-grey-600"
              : "text-white text-hover-grey-200"
          } `}
        ></i>
      </div>

      <div className="mt-3 flex justify-between">
        <span className="text-grey-600 ">created: 22/22/22 </span>
        <div>
          <i className="fa-solid fa-trash-can text-red-500 text-hover-rose-300"></i>
        </div>
      </div>
    </Link>
  );
};
