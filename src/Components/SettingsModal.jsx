import React from "react";
import { motion } from "framer-motion";

export default function SettingsModal({ onClose, onLanguageSelect }) {
  return (
    // Semi-transparent backdrop (lighter than before)
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/25"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Modal box */}
      <motion.div
        className="relative w-[400px] rounded-xl bg-white p-6 shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Close “X” */}
        <button
          onClick={onClose}
          className="reset absolute right-3 top-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="mb-4 text-center text-xl font-semibold">Settings</h2>

        <p className="mb-2 text-center">Choose Language:</p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => onLanguageSelect("en")}
            className="rounded-4xl py-2 text-black hue-rotate-30"
          >
            English
          </button>
          <button
            onClick={() => onLanguageSelect("fr")}
            className="rounded-4xl hue-rotate-100 py-2 text-black"
          >
            Français
          </button>
          <button
            onClick={() => onLanguageSelect("es")}
            className="rounded-4xl hue-rotate-270 py-2 text-black"
          >
            Español
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
