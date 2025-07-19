import React from "react";

type Process = {
  id: number;
  arrival: number;
  duration: number;
  start: number;
  finish: number;
  waiting: number;
  turnaround: number;
};

type Props = {
  processes: Process[];
};

export const ProcessTable: React.FC<Props> = ({ processes }) => {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid black" }}>ID</th>
          <th style={{ border: "1px solid black" }}>Arrival</th>
          <th style={{ border: "1px solid black" }}>Duration</th>
          <th style={{ border: "1px solid black" }}>Start</th>
          <th style={{ border: "1px solid black" }}>Finish</th>
          <th style={{ border: "1px solid black" }}>Waiting</th>
          <th style={{ border: "1px solid black" }}>Turnaround</th>
        </tr>
      </thead>
      <tbody>
        {processes.map((p) => (
          <tr key={p.id}>
            <td style={{ border: "1px solid black", textAlign: "center" }}>{p.id}</td>
            <td style={{ border: "1px solid black", textAlign: "center" }}>{p.arrival}</td>
            <td style={{ border: "1px solid black", textAlign: "center" }}>{p.duration}</td>
            <td style={{ border: "1px solid black", textAlign: "center" }}>{p.start}</td>
            <td style={{ border: "1px solid black", textAlign: "center" }}>{p.finish}</td>
            <td style={{ border: "1px solid black", textAlign: "center" }}>{p.waiting}</td>
            <td style={{ border: "1px solid black", textAlign: "center" }}>{p.turnaround}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
