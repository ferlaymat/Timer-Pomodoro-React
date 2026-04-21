import Controls from "../controls/Controls";
import StatePanel from "../stats/StatePanel";
import TimerDisplay from "../timer_display/TimerDisplay";

type Props = {
  onStart: () => void;
  onReset: () => void;
  onSkip: () => void;
};
function TimerView({ onStart, onReset, onSkip }: Props) {
  return (
    <>
      <TimerDisplay />
      <Controls onReset={onReset} onStart={onStart} onSkip={onSkip} />
      <StatePanel />
    </>
  );
}

export default TimerView;
