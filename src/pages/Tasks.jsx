import React, { useState } from "react";
import { CreateTaskForm, Modal, TaskList } from "../components";

const Tasks = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ top: "3rem", minHeight: "100vh" }} className="relative">
      <div className="flex justify-center p-6">
        <div
          onClick={() => setShowModal(true)}
          className="btn btn-solid-green text-white"
        >
          add a task
        </div>
      </div>

      <div className={`grid tasksPage__container p-6 m-2 rounded-2xl`}>
        <div className="">
          <TaskList
            category={"Important and Urgent"}
            tasks={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
          />
        </div>
        <div className="">
          <TaskList
            category={"Important and Not Urgent"}
            tasks={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11]}
          />
        </div>
        <div className="">
          <TaskList
            category={"Not Important and Urgent"}
            tasks={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
          />
        </div>
        <div className="">
          <TaskList
            category={"Not Important and Not Urgent"}
            tasks={[1, 1, 1, 1, 1]}
          />
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalBody={<CreateTaskForm />}
        modalTitle={"Create a Task"}
      />
      <div className="spacer-3rem"> </div>
      <div className="spacer-3rem"> </div>
      <div className="spacer-3rem"> </div>
    </div>
  );
};

export default Tasks;
