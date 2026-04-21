import { userTimerContext } from "../context/TimerContext";
import type { DurationConfig, Mode, TimerConfig } from "../shared/model/Types";

function Config() {
  const durations: DurationConfig[] = [
    { label: "Pomodoro", mode: "pom", duration: 25 },
    { label: "Short", mode: "short", duration: 5 },
    { label: "Long", mode: "long", duration: 10 },
  ];

  const { state, dispatch } = userTimerContext();

  const getDurationForMode = (mode: Mode, config: TimerConfig): number => {
    switch (mode) {
      case "pom":
        return config.pom;
      case "short":
        return config.short;
      case "long":
        return config.long;
      default:
        return config.pom;
    }
  };

  const handleDecrease = (mode: Mode) => {
    const currentDuration = getDurationForMode(mode, state.config);
    if (currentDuration > 1) {
      dispatch({
        type: "UPDATE_CONFIG",
        payload: { [mode]: currentDuration - 1 },
      });
    }
  };

  const handleIncrease = (mode: Mode) => {
    const currentDuration = getDurationForMode(mode, state.config);
    if (currentDuration < 60) {
      dispatch({
        type: "UPDATE_CONFIG",
        payload: { [mode]: currentDuration + 1 },
      });
    }
  };

  return (
    <div className="config-container">
      <h2>Configuration</h2>
      <div className="duration-list">
        {durations.map((duration) => (
          <div key={duration.mode} className="duration-item">
            <label className="duration-label">{duration.label}</label>
            <div className="duration-controls">
              <button
                type="button"
                className="btn-decrease"
                onClick={() => handleDecrease(duration.mode)}
              >
                −
              </button>
              <input
                id={`${duration.mode}-duration`}
                type="number"
                min="1"
                max="60"
                className="duration-input"
                value={getDurationForMode(duration.mode, state.config)}
              />
              <button
                type="button"
                className="btn-increase"
                onClick={() => handleIncrease(duration.mode)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Config;
