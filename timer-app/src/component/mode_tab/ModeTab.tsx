import { type Mode } from "../shared/model/Types.ts";

interface Props {
  onChangeMode: (mode: Mode) => void;
}

function ModeTab({ onChangeMode }: Props) {
  return (
    <div>
      <button onClick={() => onChangeMode("pom")}>Pomodoro</button>
      <button onClick={() => onChangeMode("short")}>Short sleep</button>
      <button onClick={() => onChangeMode("long")}>Long sleep</button>
      <button onClick={() => onChangeMode("conf")}>Configure</button>
    </div>
  );
}

export default ModeTab;
