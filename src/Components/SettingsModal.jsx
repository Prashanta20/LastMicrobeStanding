// src/Components/SettingsModal.jsx
import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../LanguageContext";
import clickSoundFile from "/button-click.mp3";

const clickAudio = new Audio(clickSoundFile);
clickAudio.volume = 0.5;

export default function SettingsModal({
  onClose,
  onLanguageSelect,
  currentLang,
}) {
  const { t } = useLang();

  // helper to fire both sound + language switch
  const handleSelect = (langCode) => {
    clickAudio.currentTime = 0;
    clickAudio.play();
    onLanguageSelect(langCode);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/25"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-[300px] rounded-xl bg-white p-6 shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-center text-xl font-semibold">
          {t("settings")}
        </h2>

        <p className="mb-2 text-center">Choose Language:</p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => handleSelect("en")}
            className={`rounded-4xl py-2 font-medium hover:text-white ${
              currentLang === "en" ? "bg-gray-300" : "bg-gray-100"
            } hover:bg-gray-200`}
          >
            English
          </button>
          <button
            onClick={() => handleSelect("fr")}
            className={`rounded-4xl py-2 font-medium hover:text-white ${
              currentLang === "fr" ? "bg-gray-300" : "bg-gray-100"
            } hover:bg-gray-200`}
          >
            Français
          </button>
          <button
            onClick={() => handleSelect("es")}
            className={`rounded-4xl py-2 font-medium hover:text-white ${
              currentLang === "es" ? "bg-gray-300" : "bg-gray-100"
            } hover:bg-gray-200`}
          >
            Español
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
