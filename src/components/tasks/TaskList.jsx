import React from "react";
import { useTasks, useTheme } from "../../context";
import { TaskCard } from "./TaskCard";

const TaskList = ({ category }) => {
  const { theme } = useTheme();

  const { tasksState } = useTasks();

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
        {tasksState.tasks &&
          tasksState.tasks.map(
            (task) =>
              task.taskPriority === category && (
                <TaskCard key={task._id} task={task} />
              )
          )}
      </ul>
    </>
  );
};

export default TaskList;
