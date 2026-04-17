export type Mode = "pom" | "short" | "long" | "conf";

export const modeColor: Record<Mode, string> = {
  pom: "#ff6b6b",
  short: "#4ecdc4",
  long: "#45b7d1",
  conf: "#f9ca24",
};
