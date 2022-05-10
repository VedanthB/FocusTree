import React from "react";

const TaskDetailsTabs = ({ tabState, setTabState }) => {
  return (
    <div
      style={{ gap: "2rem", borderRadius: "10px" }}
      className="flex justify-between bg-slate-800 p-4"
    >
      <div
        style={{ borderRadius: "1rem" }}
        className={`shadow-2xl h-10 p-4 flex justify-center align-items-center cursor-pointer  ${
          tabState === "pomorodo" && "bg-green-500"
        } text-white`}
        onClick={() => setTabState("pomorodo")}
      >
        pomorodo
      </div>
      <div
        style={{ borderRadius: "1rem" }}
        className={`shadow-2xl h-10 p-4 flex justify-center align-items-center cursor-pointer  ${
          tabState === "short break" && "bg-green-500"
        } text-white`}
        onClick={() => setTabState("short break")}
      >
        short break
      </div>
      <div
        style={{ borderRadius: "1rem" }}
        className={`shadow-2xl h-10 p-4 flex justify-center align-items-center cursor-pointer  ${
          tabState === "long break" && "bg-green-500"
        } text-white`}
        onClick={() => setTabState("long break")}
      >
        long break
      </div>
    </div>
  );
};

export default TaskDetailsTabs;
