import { userTimerContext } from "../context/TimerContext";

function TimeLabel() {
  let remaining = userTimerContext().state.remaining;
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div>
      {formatNumber(minutes)} min {formatNumber(seconds)} sec
    </div>
  );
}

export default TimeLabel;
