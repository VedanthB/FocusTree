/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { useTasks } from "../../context";
import { taskActions } from "../../context/constants";
import Input from "../global/Input";

import TextArea from "../global/TextArea";
import TaskPriorityDropdown from "../tasks/TaskPriorityDropdown";

import { v4 as uuidv4 } from "uuid";

const CreateTaskForm = ({ task }) => {
  const [taskDetails, setTaskDetails] = useState({
    _id: null,
    title: "",
    description: "",
    "long break": 10,
    "short break": 5,
    pomodoro: 30,
    taskPriority: "none",
    createdAt: "",
  });

  const { tasksDispatch } = useTasks();

  useEffect(() => {
    if (task) {
      setTaskDetails({
        ...task,
        "long break": task["long break"] / 60,
        "short break": task["short break"] / 60,
        pomodoro: task.pomodoro / 60,
      });
    }
  }, []);

  const handleCreateTaskHandler = (e) => {
    e.preventDefault();

    if (taskDetails.title.length < 6)
      return "0/6 \nTitle needs to be at least 6 characters long.";

    if (taskDetails.description.length < 10)
      return "0/10 \nDescription needs to be at least 10 characters long.";

    if (taskDetails.pomodoro <= 0)
      return "Pomodoro timer can't be zero or less";

    if (taskDetails["long break"] > 30)
      return "Long break can't be more than 30";

    if (taskDetails["short break"] > 15)
      return "Short break can't be more than 15";

    if (taskDetails.taskPriority === "none")
      return "Please select the task priority";

    if (task) {
      tasksDispatch({
        type: taskActions.DELETE_TASK,
        payload: {
          ...taskDetails,
          _id: task._id,
          "long break": taskDetails["long break"] * 60,
          "short break": taskDetails["short break"] * 60,
          pomodoro: taskDetails.pomodoro * 60,
          createdAt: new Date().toISOString(),
        },
      });
    }

    tasksDispatch({
      type: taskActions.CREATE_TASK,
      payload: {
        ...taskDetails,
        _id: uuidv4(),
        "long break": taskDetails["long break"] * 60,
        "short break": taskDetails["short break"] * 60,
        pomodoro: taskDetails.pomodoro * 60,
        createdAt: new Date().toISOString(),
      },
    });

    setTaskDetails({
      _id: null,
      title: "",
      description: "",
      "long break": 10,
      "short break": 5,
      pomodoro: 30,
      taskPriority: "none",
      createdAt: "",
    });
  };

  const handleUpdateTaskHandler = (e) => {
    e.preventDefault();

    if (taskDetails.title.length < 6)
      return "0/6 \nTitle needs to be at least 6 characters long.";

    if (taskDetails.description.length < 10)
      return "0/10 \nDescription needs to be at least 10 characters long.";

    if (taskDetails.pomodoro <= 0)
      return "Pomodoro timer can't be zero or less";

    if (taskDetails["long break"] > 30)
      return "Long break can't be more than 30";

    if (taskDetails["short break"] > 15)
      return "Short break can't be more than 15";

    if (taskDetails.taskPriority === "none")
      return "Please select the task priority";

    if (task) {
      tasksDispatch({
        type: taskActions.UPDATE_TASK,
        payload: {
          ...taskDetails,
          _id: task._id,
          "long break": taskDetails["long break"] * 60,
          "short break": taskDetails["short break"] * 60,
          pomodoro: taskDetails.pomodoro * 60,
          createdAt: new Date().toISOString(),
        },
      });
    }

    setTaskDetails({
      _id: null,
      title: "",
      description: "",
      "long break": 10,
      "short break": 5,
      pomodoro: 30,
      taskPriority: "none",
      createdAt: "",
    });
  };

  return (
    <form
      style={{ height: "50vh", overflow: "scroll" }}
      onSubmit={handleCreateTaskHandler}
    >
      <div className="flex justify-center align-items-center">
        <div className="avatar avatar-lg">
          <img
            src="https://res.cloudinary.com/supertramp69420/image/upload/v1651230740/focus/Mask_group_esxkid.svg"
            alt="avatar-img"
            className="img-round img-responsive"
          />
        </div>
      </div>
      <div className="spacer-3rem"></div>

      <h3 className="text-black text-2xl text-center">
        Let's plant a focus tree
      </h3>

      <div className="spacer-3rem"></div>

      <Input
        type={"text"}
        value={taskDetails.title}
        name="title"
        onChange={(e) => {
          const { name, value } = e.target;

          setTaskDetails({ ...taskDetails, [name]: value });
        }}
        label={"Task Title"}
        errorMessage={
          taskDetails.title.length < 6
            ? "0/6 \nTitle needs to be at least 6 characters long."
            : ""
        }
        required
      />

      <div className="spacer-3rem"></div>

      <TextArea
        value={taskDetails.description}
        name="description"
        onChange={(e) => {
          const { name, value } = e.target;

          setTaskDetails({ ...taskDetails, [name]: value });
        }}
        label={"Task Description"}
        style={{ height: "100px", resize: "none" }}
        errorMessage={
          taskDetails.description.length < 10
            ? "0/10 \nDescription needs to be at least 10 characters long."
            : ""
        }
        required
      />

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <h4 className="text-black ">Choose task and break time</h4>
      <div className="spacer-2rem"></div>

      <div className="flex justify-between">
        <div className="w-44">
          <Input
            type={"number"}
            value={taskDetails.pomodoro}
            name="pomodoro"
            onChange={(e) => {
              const { name, value } = e.target;

              setTaskDetails({ ...taskDetails, [name]: parseInt(value) });
            }}
            label={"Pomodoro"}
            errorMessage={
              taskDetails.pomodoro <= 0 &&
              "Pomodoro timer can't be zero or less"
            }
            required
          />
        </div>
        <div className="w-44">
          <Input
            type={"number"}
            value={taskDetails["long break"]}
            name="long break"
            onChange={(e) => {
              const { name, value } = e.target;

              setTaskDetails({ ...taskDetails, [name]: parseInt(value) });
            }}
            label={"Long Break"}
            errorMessage={
              taskDetails["long break"] > 30
                ? "Long break can't be more than 30"
                : ""
            }
            required
          />
        </div>
        <div className="w-44">
          <Input
            type={"number"}
            value={taskDetails["short break"]}
            name="short break"
            onChange={(e) => {
              const { name, value } = e.target;

              setTaskDetails({ ...taskDetails, [name]: parseInt(value) });
            }}
            label={"Short Break"}
            errorMessage={
              taskDetails["short break"] > 15
                ? "Short break can't be more than 15"
                : ""
            }
            required
          />
        </div>
      </div>

      <div className="spacer-3rem"></div>

      <h4 className="text-black ">Choose task priority</h4>
      <div className="spacer-2rem"></div>

      <TaskPriorityDropdown
        taskPriority={taskDetails.taskPriority}
        onChange={(e) => {
          const { name, value } = e.target;

          setTaskDetails({ ...taskDetails, [name]: value });
        }}
        errorMessage={
          taskDetails.taskPriority === "none" &&
          "Please select the task priority"
        }
      />

      <div className="spacer-3rem"></div>

      <button
        type="submit"
        onClick={(e) =>
          task ? handleUpdateTaskHandler(e) : handleCreateTaskHandler(e)
        }
        className="btn btn-solid-green shadow-lg text-white"
      >
        {task ? "edit task" : "create task"}
      </button>
    </form>
  );
};

export default CreateTaskForm;
