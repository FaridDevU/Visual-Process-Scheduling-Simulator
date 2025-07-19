import { useEffect, useState } from "react";
import { ProcessTable } from "./components/ProcessTable";
import { GanttChart } from "./components/GanttChart";
import { LanguageSelector } from "./components/LanguageSelector";
import { Explanation } from "./components/Explanation";

type Process = {
  id: number;
  arrival: number;
  duration: number;
  start: number;
  finish: number;
  waiting: number;
  turnaround: number;
};

function App() {
  const [processes, setProcesses] = useState<Process[]>([]);
  const [lang, setLang] = useState<"es" | "en">("es");

  useEffect(() => {
    fetch("/processes.json")
      .then((res) => res.json())
      .then((data) => setProcesses(Array.isArray(data) ? data : data.processes))
      .catch((e) => console.error("Error loading JSON:", e));
  }, []);

  // Maneja la carga manual del archivo JSON
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        setProcesses(Array.isArray(data) ? data : data.processes);
      } catch (error) {
        alert("Archivo JSON inválido.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Process Scheduler Visualizer</h1>
      <LanguageSelector lang={lang} setLang={setLang} />
      <Explanation lang={lang} />
      <input
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        style={{ margin: "16px 0", padding: "8px" }}
      />
      {processes.length === 0 ? (
        <p>No hay procesos cargados. Sube un archivo JSON válido.</p>
      ) : (
        <>
          <ProcessTable processes={processes} />
          <GanttChart
            processes={processes.map(({ id, start, duration }) => ({
              id,
              start,
              duration
            }))}
          />
        </>
      )}
    </div>
  );
}

export default App;
