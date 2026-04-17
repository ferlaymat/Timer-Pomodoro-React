import Controls from "../controls/Controls";
import type { Mode } from "../shared/model/Types";
import StatePanel from "../stats/StatePanel";
import TimerDisplay from "../timer_display/TimerDisplay";

type Props = {
  remaining: number;
  total: number;
  mode: Mode;
  timer: number | null;
  onStart: () => void;
  onReset: () => void;
  onSkip: () => void;
  completed: number;
};
function TimerView({
  remaining,
  total,
  mode,
  timer,
  completed,
  onStart,
  onReset,
  onSkip,
}: Props) {
  return (
    <>
      <TimerDisplay
        remaining={remaining}
        total={total}
        mode={mode}
        timer={timer}
      />
      <Controls onReset={onReset} onStart={onStart} onSkip={onSkip} />
      <StatePanel completed={completed} />
    </>
  );
}

export default TimerView;
