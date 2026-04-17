import { useEffect, useState } from "react";
import ModeTab from "./mode_tab/ModeTab";
import type { Mode } from "./shared/model/Types";
import TimerView from "./view/TimerView";
import Config from "./configurator/Config";

const TimerPomodoro = () => {
  const [remaining, setRemaining] = useState<number>(630);
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [savedRemaining, setSavedRemaining] = useState<number>(0);
  const [pauseRemaining, setPauseRemaining] = useState<number>(0);
  const start = () => {
    if (!isRunning && remaining === 630) {
      setIsRunning(true);
    }
  };

  const skip = () => {
    if (isRunning && remaining > 0) {
      setIsRunning(false);
      setRemaining(630);
      setCompleted((prev: number) => {
        return prev + 1;
      });
    }
  };

  const reset = () => {
    setIsRunning(false);
    setRemaining(630);
  };

  const [mode, setMode] = useState("pom");
  const changeMode = (mode: Mode) => {
    setMode(mode);
    if (!isPaused && (mode === "short" || mode === "long")) {
      setIsRunning(false);
      setSavedRemaining(remaining);
      setIsPaused(true);
      setPauseRemaining(10);
    }
  };

  //manage timer when start method is called
  useEffect(() => {
    let interval: number;

    if (isRunning && remaining > 0) {
      interval = setInterval(() => {
        //change value then wait 1sec
        //as the value interval has changed, the effect is recalled
        setRemaining((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval); // Cleanup
  }, [isRunning, remaining]);

  //manage timer when remaining is finished
  useEffect(() => {
    if (isRunning && remaining === 0) {
      setIsRunning(false);
      setRemaining(630);
      setCompleted((prev) => prev + 1);
    }
  }, [isRunning, remaining]);

  useEffect(() => {
    let interval: number;

    if (isPaused && pauseRemaining > 0) {
      interval = setInterval(() => {
        setPauseRemaining((prev) => prev - 1);
      }, 1000);
    } else if (isPaused && pauseRemaining === 0) {
      // restart after the pause
      setIsPaused(false);
      setRemaining(savedRemaining); // Restore previous time
      setIsRunning(true); // restart timer
      setMode("pom");
    }

    return () => clearInterval(interval);
  }, [isPaused, pauseRemaining]);

  return (
    <div>
      <h1>Timer Pomodoro</h1>
      <ModeTab onChangeMode={changeMode} />
      {mode === "conf" ? (
        <Config />
      ) : (
        <TimerView
          remaining={remaining}
          total={630}
          mode={mode as Mode}
          timer={pauseRemaining}
          onReset={reset}
          onStart={start}
          onSkip={skip}
          completed={completed}
        />
      )}
    </div>
  );
};

export default TimerPomodoro;
