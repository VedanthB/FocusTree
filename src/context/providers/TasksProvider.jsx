import React, { createContext, useContext, useEffect, useReducer } from "react";

import { tasksReducer } from "../reducers";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasksState, tasksDispatch] = useReducer(tasksReducer, {
    tasks: JSON.parse(localStorage.getItem("focusTreeTasks")) ?? [],
  });

  useEffect(() => {
    localStorage.setItem("focusTreeTasks", JSON.stringify(tasksState.tasks));
  }, [tasksState.tasks]);

  console.log(tasksState.tasks);

  return (
    <TasksContext.Provider value={{ tasksState, tasksDispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
