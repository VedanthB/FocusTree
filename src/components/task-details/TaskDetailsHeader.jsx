import React from "react";

const TaskDetailsHeader = ({ title, description }) => {
  return (
    <div className="alert-box bg-green-200 text-green-800">
      <h3> {title} </h3>

      <div className="spacer-2rem"> </div>

      <p>{description}</p>
    </div>
  );
};

export default TaskDetailsHeader;
