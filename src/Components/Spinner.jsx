import React from "react";
import { motion } from "framer-motion";

function Spinner() {
  return (
    <motion.div
      className="flex h-screen w-full items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {
        <div className="flex h-screen w-full items-center justify-center bg-white">
          <p className="text-2xl font-bold">Loading Spinner Page...</p>
        </div>
      }
    </motion.div>
  );
}

export default Spinner;
