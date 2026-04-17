import { useEffect, useState } from "react";
import Controls from "./controls/Controls";
import ModeTab from "./mode_tab/ModeTab";
import type { Mode } from "./shared/model/Types";
import TimerDisplay from "./timer_display/TimerDisplay";
import StatePanel from "./stats/StatePanel";

const TimerPomodoro = () => {
  const [remaining, setRemaining] = useState<number>(630);
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(0);
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
    setMode(() => {
      return mode;
    });
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

  return (
    <div>
      <h1>Timer Pomodoro</h1>
      <ModeTab onChangeMode={changeMode} />
      <TimerDisplay remaining={remaining} total={630} mode={mode as Mode} />
      <Controls onReset={reset} onStart={start} onSkip={skip} />
      <StatePanel completed={completed} />
    </div>
  );
};

export default TimerPomodoro;
