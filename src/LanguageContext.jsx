// src/LanguageContext.jsx
import React, { createContext, useContext, useState } from "react";
import { translations } from "./translations";

const LangCtx = createContext({
  lang: "en",
  setLang: (_) => {},
  t: (key) => "",
});

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = (key) => translations[lang][key] || key;
  return (
    <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>
  );
}

export function useLang() {
  return useContext(LangCtx);
}
