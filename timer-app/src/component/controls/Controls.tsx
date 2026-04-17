interface Props {
  onStart: () => void;
  onReset: () => void;
  onSkip: () => void;
}

function Controls({ onStart, onReset, onSkip }: Props) {
  return (
    <div>
      <button onClick={() => onReset()}>↺</button>
      <button onClick={() => onStart()}>Start</button>
      <button onClick={() => onSkip()}>⏭</button>
    </div>
  );
}

export default Controls;
