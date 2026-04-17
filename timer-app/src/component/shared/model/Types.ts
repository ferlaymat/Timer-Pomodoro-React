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
