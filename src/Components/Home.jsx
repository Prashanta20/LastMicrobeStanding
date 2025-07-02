// src/Components/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gearIcon from "../assets/gear.png";
import SettingsModal from "./SettingsModal";
import { useLang } from "../LanguageContext";

// for each language, list the two thumbnails in public/
const comics = {
  en: ["/full color night club English.png", "/full color plants English.png"],
  fr: ["/full color night club French.png", "/full color plants French.png"],
  es: ["/full color night club spanish.png", "/full color plants spanish.png"],
};

export default function Home() {
  const { t, setLang, lang } = useLang();
  const navigate = useNavigate();

  const [showSettings, setShowSettings] = useState(false);
  // no TS annotation here, just null or 0/1 index
  const [comicIndex, setComicIndex] = useState(null);

  const handleLanguageSelect = (newLang) => {
    setLang(newLang);
    setShowSettings(false);
  };

  const handleHowToPlay = () => {
    const pdfPath =
      lang === "fr"
        ? "/French_Last_microbe_standing_Rules.pdf"
        : "/English_Last_microbe_standing_27July2022.pdf";
    window.open(pdfPath, "_blank");
  };

  // pick the right pair of thumbnails
  const thumbs = comics[lang] || comics.en;

  return (
    <>
      <motion.div
        className="flex h-screen w-full items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex h-screen w-full items-center justify-center">
          <div className="flex h-[500px] w-[800px] flex-col justify-between rounded-2xl bg-white bg-opacity-80 p-8 text-black shadow-lg">
            {/* Top: Settings + Title */}
            <div className="relative">
              <button
                onClick={() => setShowSettings(true)}
                className="rounded-4xl grayscale-100 absolute left-0 top-0 flex items-center gap-2 bg-gray-300 px-4 py-2 text-sm font-medium text-black shadow transition hover:cursor-pointer hover:bg-gray-400 hover:text-white"
              >
                <img
                  src={gearIcon}
                  alt="Settings"
                  className="h-4 w-4 object-contain"
                />
                <span>{t("settings")}</span>
              </button>

              <p className="text-center text-3xl font-bold">{t("homeTitle")}</p>
            </div>

            {/* Center: Comic thumbnails */}
            <div className="my-4 flex justify-center gap-6">
              {thumbs.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Comic ${i + 1}`}
                  className="h-32 w-auto cursor-pointer rounded shadow transition hover:scale-[1.02]"
                  onClick={() => setComicIndex(i)}
                />
              ))}
            </div>

            {/* Bottom: Start / How to Play */}
            <div className="flex justify-center gap-12 pb-12">
              <button
                onClick={() => navigate("/spinner")}
                className="rounded-4xl px-8 py-4 font-semibold text-black shadow hue-rotate-[270deg] transition hover:cursor-pointer hover:text-white"
              >
                {t("start")}
              </button>
              <button
                onClick={handleHowToPlay}
                className="rounded-4xl px-8 py-4 font-semibold text-black shadow hue-rotate-0 transition hover:cursor-pointer hover:text-white"
              >
                {t("howToPlay")}
              </button>
            </div>
          </div>
        </div>

        {showSettings && (
          <SettingsModal
            onClose={() => setShowSettings(false)}
            onLanguageSelect={handleLanguageSelect}
            currentLang={lang}
          />
        )}
      </motion.div>

      {/* Comic Lightbox */}
      {comicIndex !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setComicIndex(null)}
        >
          <motion.img
            src={thumbs[comicIndex]}
            alt="Full Comic"
            className="max-h-[90%] max-w-[90%] rounded shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
}
