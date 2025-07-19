import React from "react";

type Process = {
  id: number;
  start: number;
  duration: number;
};

type Props = {
  processes: Process[];
};

export const GanttChart: React.FC<Props> = ({ processes }) => {
  const maxTime = Math.max(...processes.map((p) => p.start + p.duration));

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Gantt Chart</h3>
      {processes.map((p) => {
        const leftPercent = (p.start / maxTime) * 100;
        const widthPercent = (p.duration / maxTime) * 100;

        return (
          <div
            key={p.id}
            style={{
              position: "relative",
              height: 30,
              marginBottom: 5,
              backgroundColor: "#ddd",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: `${leftPercent}%`,
                width: `${widthPercent}%`,
                height: "100%",
                backgroundColor: "#4caf50",
                color: "white",
                textAlign: "center",
                lineHeight: "30px",
                borderRadius: 4,
              }}
            >
              P{p.id}
            </div>
          </div>
        );
      })}
    </div>
  );
};
