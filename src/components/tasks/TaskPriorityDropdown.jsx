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
          <option value="Important and Urgent">Important and Urgent</option>
          <option value="Important and Not Urgent">
            Important and Not Urgent
          </option>
          <option value="Not Important and Urgent">
            Not Important and Urgent
          </option>
          <option value="Not Important and Not Urgent">
            Not Important and Not Urgent
          </option>
        </select>
      </div>

      <small className="text-red-500 text-sm"> {errorMessage} </small>
    </>
  );
};

export default TaskPriorityDropdown;
