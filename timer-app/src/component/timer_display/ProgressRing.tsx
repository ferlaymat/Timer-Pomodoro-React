type Props = {
  progress: number;
  color: string;
  size: number;
};

function ProgressRing({ progress, color, size }: Props) {
  const circumference = 2 * Math.PI * 80;
  const offset = circumference * (1 - progress);

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
    </svg>
  );
}
export default ProgressRing;
