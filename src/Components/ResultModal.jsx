// src/Components/ResultModal.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ResultModal({
  onClose,
  inner,
  outer,
  labels,
  outerLabels,
}) {
  const outerIndex = outer.charCodeAt(0) - 65;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/25"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // click anywhere to close
    >
      <motion.div
        className="relative w-[320px] rounded-xl bg-white p-6 shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h2 className="mb-4 text-center text-xl font-semibold">
          🎉 You landed on 🎉
        </h2>

        <p className="mb-2">
          <span className="font-bold">Outer ({outer}): </span>
          {outerLabels[outerIndex]}
        </p>
        <p>
          <span className="font-bold">Inner ({inner}): </span>
          {labels[inner - 1]}
        </p>
      </motion.div>
    </motion.div>
  );
}
