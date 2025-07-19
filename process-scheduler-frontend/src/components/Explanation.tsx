import React from "react";

type Props = {
  lang: "es" | "en";
};

const explanations = {
  es: "Esta simulación muestra cómo un sistema operativo planifica y administra la ejecución de tareas para optimizar el uso del CPU.",
  en: "This simulation shows how an operating system schedules and manages task execution to optimize CPU usage."
};

export const Explanation: React.FC<Props> = ({ lang }) => {
  return <p>{explanations[lang]}</p>;
};
