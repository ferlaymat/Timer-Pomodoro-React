import type { TimerAction, TimerState } from "../shared/model/Types";

const TimerReducer = (state: TimerState, action: TimerAction): TimerState => {
  switch (action.type) {
    case "START":
      if (state.remaining === state.total && !state.isRunning) {
        return { ...state, isRunning: true };
      }
      return state;

    case "SKIP":
      if (state.isRunning && state.remaining > 0) {
        return {
          ...state,
          isRunning: false,
          remaining: state.total,
          completed: state.completed + 1,
        };
      }
      return state;

    case "RESET":
      return {
        ...state,
        isRunning: false,
        remaining: state.total,
      };

    case "CHANGE_MODE":
      const newState = { ...state, mode: action.payload };
      if (
        !state.isPaused &&
        (action.payload === "short" || action.payload === "long")
      ) {
        return {
          ...newState,
          mode: action.payload,
          isRunning: false,
          savedRemaining: state.remaining,
          isPaused: true,
          pauseRemaining: state.config[action.payload] * 60,
        };
      }
      return state;

    case "TICK":
      if (action.target === "timer") {
        return { ...state, remaining: state.remaining - 1 };
      } else {
        return { ...state, pauseRemaining: state.pauseRemaining - 1 };
      }

    case "TIMER_COMPLETE":
      if (state.isRunning && state.remaining === 0) {
        return {
          ...state,
          isRunning: false,
          remaining: state.total,
          completed: state.completed + 1,
        };
      }
      return state;

    case "PAUSE_COMPLETE":
      return {
        ...state,
        isPaused: false,
        remaining: state.savedRemaining,
        isRunning: true,
        mode: "pom",
      };

    case "UPDATE_CONFIG":
      const newConfig = { ...state.config, ...action.payload };
      return {
        ...state,
        config: newConfig,
        total: newConfig.pom * 60,
        remaining: newConfig.pom * 60,
      };
    default:
      return state;
  }
};

export default TimerReducer;
