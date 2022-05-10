import React from "react";

const TaskDetailsHeader = ({ title, description }) => {
  return (
    <div className="alert-box bg-green-200 text-green-800">
      <h4> {title} </h4>

      <div className="spacer-3rem"> </div>

      <p>{description}</p>
    </div>
  );
};

export default TaskDetailsHeader;
