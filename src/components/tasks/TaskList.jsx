import React from "react";
import { useTheme } from "../../context";
import { TaskCard } from "./TaskCard";

const TaskList = ({ tasks, category }) => {
  const { theme } = useTheme();

  return (
    <>
      <h4
        className={`pt-4 pb-4 taskPage_grid_item_heading text-lg  text-center  ${
          theme === "light" ? "text-black" : "text-white"
        } `}
      >
        {category}
      </h4>
      <ul
        className={`flex flex-col p-4  rounded taskPage_grid_item`}
        style={{ gap: "1rem" }}
      >
        {tasks.map((i) => (
          <TaskCard key={i} id={i} />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
