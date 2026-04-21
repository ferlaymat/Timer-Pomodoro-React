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
  duration: number;
};

export type TimerConfig = {
  pom: number;
  short: number;
  long: number;
};

export type TimerState = {
  total: number;
  remaining: number;
  isRunning: boolean;
  completed: number;
  isPaused: boolean;
  savedRemaining: number;
  pauseRemaining: number;
  mode: Mode;
  config: TimerConfig;
};

export type TimerAction =
  | { type: "START" }
  | { type: "SKIP" }
  | { type: "RESET" }
  | { type: "CHANGE_MODE"; payload: Mode }
  | { type: "TICK"; target: "timer" | "pause" }
  | { type: "TIMER_COMPLETE" }
  | { type: "PAUSE_COMPLETE" }
  | { type: "UPDATE_CONFIG"; payload: Partial<TimerConfig> };
