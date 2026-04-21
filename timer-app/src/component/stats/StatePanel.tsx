import { userTimerContext } from "../context/TimerContext";

function StatePanel() {
  let completed = userTimerContext().state.completed;
  return <div>{completed}</div>;
}

export default StatePanel;
