import { useEffect, useMemo, useReducer } from "react";
import ModeTab from "./mode_tab/ModeTab";
import type { Mode, TimerState } from "./shared/model/Types";
import TimerView from "./view/TimerView";
import Config from "./configurator/Config";
import { TimerContext } from "./context/TimerContext";
import TimerReducer from "./reducer/TimerReducer";

function TimerPomodoro() {
  const initialState: TimerState = {
    remaining: 630,
    isRunning: false,
    completed: 0,
    isPaused: false,
    savedRemaining: 0,
    pauseRemaining: 0,
    mode: "pom",
  };
  const [state, dispatch] = useReducer(TimerReducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  const changeMode = (mode: Mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  //manage timer when start method is called
  useEffect(() => {
    let interval: number;

    if (state.isRunning && state.remaining > 0) {
      interval = setInterval(() => {
        //change value then wait 1sec
        //as the value interval has changed, the effect is recalled
        dispatch({ type: "TICK", target: "timer" });
      }, 1000);
    }
    return () => clearInterval(interval); // Cleanup
  }, [state.isRunning, state.remaining]);

  //manage timer when remaining is finished
  useEffect(() => {
    dispatch({ type: "TIMER_COMPLETE" });
  }, [state.isRunning, state.remaining]);

  useEffect(() => {
    let interval: number;

    if (state.isPaused && state.pauseRemaining > 0) {
      interval = setInterval(() => {
        dispatch({ type: "TICK", target: "pause" });
      }, 1000);
    } else if (state.isPaused && state.pauseRemaining === 0) {
      // restart after the pause
      dispatch({ type: "PAUSE_COMPLETE" });
    }

    return () => clearInterval(interval);
  }, [state.isPaused, state.pauseRemaining]);

  return (
    <>
      {/* Timer context allow to avoid  to prop drill. Children can access
      them by useContextTimer function */}
      <TimerContext.Provider value={value}>
        <h1>Timer Pomodoro</h1>
        <ModeTab onChangeMode={changeMode} />
        {state.mode === "conf" ? (
          <Config />
        ) : (
          <TimerView
            total={630}
            completed={state.completed}
            onReset={() => dispatch({ type: "RESET" })}
            onStart={() => dispatch({ type: "START" })}
            onSkip={() => dispatch({ type: "SKIP" })}
          />
        )}
      </TimerContext.Provider>
    </>
  );
}

export default TimerPomodoro;
