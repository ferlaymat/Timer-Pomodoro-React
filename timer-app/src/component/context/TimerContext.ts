import { createContext, useContext } from "react";
import type { TimerAction, TimerState } from "../shared/model/Types";

type TimerContextType = {
  state: TimerState;
  dispatch: React.Dispatch<TimerAction>;
};

export const TimerContext = createContext<TimerContextType | null>(null);

export function userTimerContext() {
  const ctx = useContext(TimerContext);
  if (!ctx) throw new Error("useTimerContext must be used in TimerProvider");
  return ctx;
}
