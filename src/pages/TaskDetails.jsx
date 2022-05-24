import React, { useEffect, useState } from "react";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useParams } from "react-router-dom";
import {
  TaskDetailsHeader,
  TaskDetailsTabs,
  Modal,
  CreateTaskForm,
} from "../components";
import { useTasks } from "../context";
import useSound from "use-sound";
import timesUpSfx from "../sounds/timesUp.mp3";
import startSfx from "../sounds/startTimer.mp3";
import pauseSfx from "../sounds/pauseTimer.mp3";

const TaskDetails = () => {
  const { taskId } = useParams();

  const {
    tasksState: { tasks },
  } = useTasks();

  let task = tasks.find((item) => item._id === taskId);

  const [time, setTime] = useState(task.pomodoro);

  const [timer, setTimer] = useState(time);
  const [play, setPlay] = useState(false);
  const [tabState, setTabState] = useState("pomodoro");

  const [timerImagePlant, setTimerImagePlant] = useState("timerImagePlant");

  const [timerImageTree, setTimerImageTree] = useState("timerImageTree");

  const [timerImageTreeDead, setTimerImageTreeDead] =
    useState("timerImageTree");

  const [showModal, setShowModal] = useState(false);

  const [timesUp] = useSound(timesUpSfx, {
    volume: 1,
  });

  const [playSound] = useSound(startSfx, {
    interrupt: true,
    volume: 1,
  });

  const [pause] = useSound(pauseSfx, {
    interupt: true,
    volume: 1,
  });

  const changeTimerImage = () => {
    if (timer * 2 === time) {
      setTimerImagePlant("timerImagePlant__hide");
      setTimerImageTree("timerImageTree__show");
      setTimerImageTreeDead("timerImageTree");
    }
    if (timer === time) {
      setTimerImagePlant("timerImagePlant");
      setTimerImageTree("timerImageTree");
      setTimerImageTreeDead("timerImageTree");
    }
    if (!play && timer !== time) {
      setTimerImagePlant("timerImagePlant__hide");
      setTimerImageTree("timerImageTree");
      setTimerImageTreeDead("timerImageTree__show");
    }

    if (play && timer !== time && timer > time / 2) {
      setTimerImagePlant("timerImagePlant");
      setTimerImageTree("timerImageTree");
      setTimerImageTreeDead("timerImageTree");
    }
    if (play && timer !== time && timer < time / 2) {
      setTimerImagePlant("timerImagePlant__hide");
      setTimerImageTree("timerImageTree__show");
      setTimerImageTreeDead("timerImageTree");
    }
  };

  useEffect(() => {
    if (play) {
      let intervalId = setInterval(() => {
        if (timer >= 0) {
          setTimer((timer) => timer - 1);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }

    if (timer === 0) {
      timesUp();
    }
  }, [timer, play]);

  useEffect(() => {
    changeTimerImage();
  }, [timer, play]);

  const formatTimeLeft = (seconds) => {
    return `${Math.floor(seconds / 60)} : ${
      seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60)
    }`;
  };

  useEffect(() => {
    switch (tabState) {
      case "pomodoro":
        setTime(task.pomodoro);
        setTimer(task.pomodoro);
        break;
      case "short break":
        setTime(task["short break"]);
        setTimer(task["short break"]);
        break;

      case "long break":
        setTime(task["long break"]);
        setTimer(task["long break"]);
        break;

      default:
        return;
    }

    changeTimerImage();
  }, [tabState]);

  useEffect(() => {
    if (play) {
      pause();
    }
    if (!play) {
      playSound();
    }
  }, [play]);

  return (
    <>
      <div
        className="flex relative justify-center align-items-center"
        style={{ top: "3rem", minHeight: "90vh" }}
      >
        <div>
          <TaskDetailsHeader
            title={task.title}
            description={task.description}
          />

          <div className="spacer-2rem"> </div>

          <div className="flex w-full justify-center align-items-center">
            <button
              className="pomodoro-app__preferences"
              name="settings"
              title="show preferences pane"
              onClick={() => setShowModal(true)}
            >
              <i className="fa-solid fa-gear text-green-500 text-hover-green-400 text-2xl"></i>
            </button>
          </div>

          <div className="spacer-2rem"> </div>

          <TaskDetailsTabs tabState={tabState} setTabState={setTabState} />

          <div className="spacer-3rem"> </div>

          <div className="flex justify-center w-full">
            <div className="h-44 w-44">
              <CircularProgressbarWithChildren
                counterClockwise={"true"}
                value={timer}
                maxValue={time}
                minValue={0}
                styles={buildStyles({
                  pathTransitionDuration: 0.5,
                  pathColor: "#22c55e",
                  trailColor: "none",
                })}
              >
                <img
                  style={{ width: "7rem", height: "7rem" }}
                  src="https://res.cloudinary.com/supertramp69420/image/upload/v1651230740/focus/Mask_group_esxkid.svg"
                  alt="plant-img"
                  className={`h-20 w-20 absolute ${timerImagePlant}`}
                />

                <img
                  style={{ width: "7rem", height: "7rem" }}
                  src="https://res.cloudinary.com/supertramp69420/image/upload/v1651237385/focus/Mask_group_1_c4ezih.svg"
                  alt="plant-img"
                  className={`h-20 w-20 absolute ${timerImageTree}`}
                />

                <img
                  style={{ width: "7rem", height: "7rem" }}
                  src="https://res.cloudinary.com/supertramp69420/image/upload/v1651237385/focus/Mask_group_2_f3reqo.svg"
                  alt="plant-img"
                  className={`h-20 w-20 absolute ${timerImageTreeDead}`}
                />
              </CircularProgressbarWithChildren>
            </div>
          </div>

          <div className="spacer-3rem"> </div>

          <div className="flex justify-center w-full">
            {play ? (
              <i
                onClick={() => setPlay(!play)}
                className="fa-solid fa-pause text-3xl text-amber-500"
              ></i>
            ) : (
              <i
                onClick={() => setPlay(!play)}
                className="fa-solid fa-play text-3xl text-green-500"
              ></i>
            )}

            <i
              onClick={() => setTimer(time)}
              className="fa-solid ml-3 fa-arrow-rotate-left text-3xl text-green-500"
            ></i>
          </div>

          <div className="spacer-2rem"> </div>

          <h3 className="text-4xl text-center text-green-500">
            {formatTimeLeft(timer)}
          </h3>

          <div className="spacer-3rem"> </div>
          <div className="spacer-3rem"> </div>
          <div className="spacer-3rem"> </div>
          <div className="spacer-3rem"> </div>
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalBody={<CreateTaskForm task={task} setShowModal={setShowModal} />}
        modalTitle={"Edit Task"}
      />
    </>
  );
};

export default TaskDetails;
