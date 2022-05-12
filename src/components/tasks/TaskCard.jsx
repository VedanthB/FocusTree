import React from "react";

import { Link } from "react-router-dom";

import moment from "moment";
import { taskActions } from "../../context/constants";
import { useTasks } from "../../context";

export const TaskCard = ({ task }) => {
  const { tasksDispatch } = useTasks();

  return (
    <div
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
          {task.title}
        </h3>
      </div>

      <div className="mt-3 flex justify-start">
        <span className="text-grey-600">
          {moment(task.createdAt).fromNow()}
        </span>
      </div>

      <div className="mt-3 flex justify-between">
        <Link to={`/tasks/${task._id}`} className="taskCard__link">
          Start Focusing
        </Link>
        <div>
          <i
            onClick={() =>
              tasksDispatch({
                type: taskActions.DELETE_TASK,
                payload: {
                  ...task,
                },
              })
            }
            className="fa-solid text-2xl fa-trash-can text-red-500 text-hover-rose-300"
          ></i>
        </div>
      </div>
    </div>
  );
};
