import type { DurationConfig } from "../shared/model/Types";

function Config() {
  const durations: DurationConfig[] = [
    { label: "Pomodoro", mode: "pom" },
    { label: "Short", mode: "short" },
    { label: "Long", mode: "long" },
  ];

  return (
    <div className="config-container">
      <h2>Configuration</h2>
      <div className="duration-list">
        {durations.map((duration) => (
          <div key={duration.mode} className="duration-item">
            <label className="duration-label">{duration.label}</label>
            <div className="duration-controls">
              <button type="button" className="btn-decrease">
                −
              </button>
              <input
                id={`${duration.mode}-duration`}
                type="number"
                min="1"
                max="60"
                className="duration-input"
                readOnly
              />
              <button type="button" className="btn-increase">
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Config;
