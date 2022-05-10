import React, { useEffect, useState } from "react";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { TaskDetailsHeader, TaskDetailsTabs } from "../components";

const TaskDetails = () => {
  let time = 1 * 60;

  const [timer, setTimer] = useState(time);
  const [play, setPlay] = useState(false);
  const [tabState, setTabState] = useState("pomorodo");

  const [timerImagePlant, setTimerImagePlant] = useState("timerImagePlant");

  const [timerImageTree, setTimerImageTree] = useState("timerImageTree");

  const [timerImageTreeDead, setTimerImageTreeDead] =
    useState("timerImageTree");

  useEffect(() => {
    if (play) {
      let intervalId = setInterval(() => {
        if (time >= 0) {
          setTimer((timer) => timer - 1);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer, play]);

  useEffect(() => {
    if (timer * 2 === time) {
      setTimerImagePlant("timerImagePlant__hide");
      setTimerImageTree("timerImageTree__show");
    }
    if (timer === time) {
      setTimerImagePlant("timerImagePlant");
      setTimerImageTree("timerImageTree");
    }
  }, [timer]);

  useEffect(() => {
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
  }, [play]);

  const formatTimeLeft = (seconds) => {
    return `${Math.floor(seconds / 60)} : ${
      seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60)
    }`;
  };

  return (
    <div
      className="flex relative justify-center align-items-center"
      style={{ top: "3rem", minHeight: "90vh" }}
    >
      <div>
        <TaskDetailsHeader />

        <div className="spacer-3rem"> </div>

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

        <div className="spacer-3rem"> </div>

        <h3 className="text-4xl text-center text-green-500">
          {formatTimeLeft(timer)}
        </h3>

        <div className="spacer-3rem"> </div>
        <div className="spacer-3rem"> </div>
        <div className="spacer-3rem"> </div>
        <div className="spacer-3rem"> </div>
      </div>
    </div>
  );
};

export default TaskDetails;
