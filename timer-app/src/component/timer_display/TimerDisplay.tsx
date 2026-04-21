import { userTimerContext } from "../context/TimerContext";
import { modeColor } from "../shared/model/Types";
import ProgressRing from "./ProgressRing";
import TimeLabel from "./TimeLabel";

function TimerDisplay() {
  let remaining = userTimerContext().state.remaining;
  let mode = userTimerContext().state.mode;
  let timer = userTimerContext().state.pauseRemaining;
  let total = userTimerContext().state.total;
  const progress = remaining / total;

  return (
    <div className="timer-display">
      <ProgressRing
        progress={progress}
        color={modeColor[mode]}
        size={180}
        timer={timer}
      />
      <TimeLabel />
    </div>
  );
}

export default TimerDisplay;
