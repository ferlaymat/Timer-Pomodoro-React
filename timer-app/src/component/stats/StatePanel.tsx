interface Props {
  completed: number;
}

function StatePanel({ completed }: Props) {
  return <div>{completed}</div>;
}

export default StatePanel;
