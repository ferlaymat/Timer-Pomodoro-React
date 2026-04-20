export type Mode = "pom" | "short" | "long" | "conf";

export const modeColor: Record<Mode, string> = {
  pom: "#5be164",
  short: "#f39039",
  long: "#fa360f",
  conf: "#cecece",
};

export type DurationConfig = {
  label: string;
  mode: Mode;
};

export type TimerState = {
  remaining: number;
  isRunning: boolean;
  completed: number;
  isPaused: boolean;
  savedRemaining: number;
  pauseRemaining: number;
  mode: Mode;
};

export type TimerAction =
  | { type: "START" }
  | { type: "SKIP" }
  | { type: "RESET" }
  | { type: "CHANGE_MODE"; payload: Mode }
  | { type: "TICK"; target: "timer" | "pause" }
  | { type: "TIMER_COMPLETE" }
  | { type: "PAUSE_COMPLETE" };
