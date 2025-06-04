import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Rules() {
  const navigate = useNavigate();
  return (
    <motion.div
      className="flex h-screen w-full items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {
        <div className="flex h-screen w-full items-center justify-center">
          <div className="flex h-[500px] w-[800px] flex-col justify-between rounded-2xl bg-white bg-opacity-80 p-8 text-black shadow-lg">
            {/* Title at top center */}
            <div className="text-center">
              <p className="text-3xl font-bold">Last Microbe Standing</p>
            </div>

            {/* Placeholder for rules content */}
            <div className="mt-6 flex-1 overflow-y-auto px-2">
              <p className="text-center text-lg italic">
                (Game rules and instructions will go here...)
              </p>
            </div>

            {/* Optional Back Button */}
            <div className="flex justify-center pt-6">
              <button
                onClick={() => navigate("/")}
                className="rounded-4xl bg-gray-300 px-6 py-2 font-semibold text-black shadow hover:cursor-pointer hover:bg-gray-400 hover:text-white"
              >
                ⬅️ Back
              </button>
            </div>
          </div>
        </div>
      }
    </motion.div>
  );
}

export default Rules;
