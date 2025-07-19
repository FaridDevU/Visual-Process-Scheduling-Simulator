import React from "react";

type Props = {
  lang: "es" | "en";
  setLang: (lang: "es" | "en") => void;
};

export const LanguageSelector: React.FC<Props> = ({ lang, setLang }) => {
  return (
    <div style={{ marginBottom: 10 }}>
      <button onClick={() => setLang("es")} disabled={lang === "es"}>Español</button>
      <button onClick={() => setLang("en")} disabled={lang === "en"} style={{ marginLeft: 10 }}>English</button>
    </div>
  );
};
