import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../LanguageContext";

export default function ResultModal({
  onClose,
  spinType,
  inner,
  outer,
  labels,
  outerLabels,
}) {
  const { t } = useLang();
  const outerIndex = outer.charCodeAt(0) - 65;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/25"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-[320px] rounded-xl bg-white p-6 shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-center text-xl font-semibold">
          {spinType === "inner" ? t("modalTitleInner") : t("modalTitleOuter")}
        </h2>

        {spinType === "inner" ? (
          <p>
            <span className="font-bold">
              {t("labelInner")} ({inner}):
            </span>{" "}
            {labels[inner - 1]}
          </p>
        ) : (
          <p>
            <span className="font-bold">
              {t("labelOuter")} ({outer}):
            </span>{" "}
            {outerLabels[outerIndex]}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
