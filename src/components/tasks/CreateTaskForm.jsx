/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Input from "../global/Input";

import TextArea from "../global/TextArea";
import TaskPriorityDropdown from "../tasks/TaskPriorityDropdown";

const CreateTaskForm = () => {
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    "long break": 10,
    "short break": 5,
    pomorodo: 30,
    taskPriority: "none",
  });

  return (
    <div style={{ height: "50vh", overflow: "scroll" }}>
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
            value={taskDetails.pomorodo}
            name="pomorodo"
            onChange={(e) => {
              const { name, value } = e.target;

              setTaskDetails({ ...taskDetails, [name]: parseInt(value) });
            }}
            label={"Pomorodo"}
            errorMessage={
              taskDetails.pomorodo <= 0 &&
              "Pomorodo timer can't be zero or less"
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
        onClick={() => {
          console.log(taskDetails);
        }}
        className="btn btn-solid-green shadow-lg text-white"
      >
        create task
      </button>
    </div>
  );
};

export default CreateTaskForm;
