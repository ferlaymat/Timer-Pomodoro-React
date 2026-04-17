type Props = {
  progress: number;
  color: string;
  size: number;
  timer: number | null;
};

function ProgressRing({ progress, color, size, timer }: Props) {
  const circumference = 2 * Math.PI * 80;
  const offset = circumference * (1 - progress);
  const timerValue = timer === 0 ? null : timer;
  return (
    <svg width={size} height={size}>
      <circle
        r="80"
        cx="90"
        cy="90"
        fill="none"
        stroke={color}
        strokeWidth="12"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      <text x="90" y="90" textAnchor="middle" dominantBaseline="middle">
        {timerValue}
      </text>
    </svg>
  );
}
export default ProgressRing;
