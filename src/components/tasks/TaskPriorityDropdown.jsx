import React from "react";

const TaskPriorityDropdown = ({ taskPriority, onChange, errorMessage }) => {
  return (
    <>
      <div className="custom-select">
        <select
          name="taskPriority"
          className="bg-green-500 text-white text-xl"
          value={taskPriority}
          onChange={onChange}
        >
          <option value="none">none</option>
          <option value="important and urgent">Important and Urgent</option>
          <option value="important and not urgent">
            Important and Not Urgent
          </option>
          <option value="not important and urgent">
            Not Important and Urgent
          </option>
          <option value="not important and not urgent">
            Not Important and Not Urgent
          </option>
        </select>
      </div>

      <small className="text-red-500 text-sm"> {errorMessage} </small>
    </>
  );
};

export default TaskPriorityDropdown;
