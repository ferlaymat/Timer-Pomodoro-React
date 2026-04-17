import { modeColor, type Mode } from "../shared/model/Types";
import ProgressRing from "./ProgressRing";
import TimeLabel from "./TimeLabel";

type Props = {
  remaining: number;
  total: number;
  mode: Mode;
};

function TimerDisplay({ remaining, total, mode }: Props) {
  const progress = remaining / total;

  return (
    <div className="timer-display">
      <ProgressRing progress={progress} color={modeColor[mode]} size={180} />
      <TimeLabel remaining={remaining} />
    </div>
  );
}

export default TimerDisplay;
