import Controls from "../controls/Controls";
import StatePanel from "../stats/StatePanel";
import TimerDisplay from "../timer_display/TimerDisplay";

type Props = {
  total: number;
  onStart: () => void;
  onReset: () => void;
  onSkip: () => void;
  completed: number;
};
function TimerView({ total, completed, onStart, onReset, onSkip }: Props) {
  return (
    <>
      <TimerDisplay total={total} />
      <Controls onReset={onReset} onStart={onStart} onSkip={onSkip} />
      <StatePanel completed={completed} />
    </>
  );
}

export default TimerView;
