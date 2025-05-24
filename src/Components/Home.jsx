import React from "react";
import gearIcon from "../assets/gear.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
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
            {/* Top section: settings button + title */}
            <div className="relative">
              {/* Absolutely positioned Settings button in top-left */}
              <button className="grayscale-100 rounded-4xl absolute left-0 top-0 flex items-center gap-2 bg-gray-300 px-4 py-2 text-sm font-medium text-black shadow transition hover:cursor-pointer hover:bg-gray-400">
                <img
                  src={gearIcon}
                  alt="Settings"
                  className="h-4 w-4 object-contain"
                />
                <span>Settings</span>
              </button>

              {/* Truly centered title */}
              <p className="text-center text-3xl font-bold">
                Last Microbe Standing
              </p>
            </div>

            {/* Buttons at bottom center */}
            <div className="flex justify-center gap-12 pb-20">
              <button
                onClick={() => navigate("/spinner")}
                className="rounded-4xl px-8 py-4 font-semibold text-black shadow hue-rotate-[270deg] transition hover:cursor-pointer hover:text-white"
              >
                ▶️ START
              </button>
              <button
                onClick={() => navigate("/rules")}
                className="rounded-4xl px-8 py-4 font-semibold text-black shadow hue-rotate-0 transition hover:cursor-pointer"
              >
                📜 HOW TO PLAY
              </button>
            </div>
          </div>
        </div>
      }
    </motion.div>
  );
}

export default Home;
