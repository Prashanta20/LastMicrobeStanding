import React, { useState } from "react";
import { motion } from "framer-motion";

const labels = [
  "TEAL mobile DNA double, one copy moves to a nearby microbe",
  "Remove a mobile DNA from any microbe",
  "Remove a RED mobile DNA",
  "Pick a new mobile DNA and add it to a microbe",
  "Nobody moves! Mobile DNA stay where they are",
  "Add a RED mobile DNA to any microbe",
  "Remove a TEAL mobile DNA",
  "RED mobile DNA double, one copy moves to a nearby microbe",
];

function Spinner() {
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    const newRotation = rotation + 360 * 3 + Math.floor(Math.random() * 360);
    setRotation(newRotation);
  };

  return (
    <motion.div
      className="flex h-screen w-full items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex h-[500px] w-[800px] flex-col justify-center rounded-2xl bg-white bg-opacity-80 p-8 text-black shadow-lg">
        {/* Spinner Wheel */}
        <div className="relative flex flex-1 flex-col items-center justify-center gap-6">
          {/* Pointer */}
          <div className="z-10 mb-0 h-0 w-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-red-500" />

          {/* Spinner Circle with Labels */}
          <div className="relative">
            <motion.div
              className="relative h-96 w-96 rounded-full border-[10px] border-gray-300"
              animate={{ rotate: rotation }}
              transition={{ duration: 2, ease: "easeOut" }}
              style={{
                background:
                  "conic-gradient(#4ade80 0deg 45deg, #3b82f6 45deg 90deg, #facc15 90deg 135deg, #f87171 135deg 180deg, #a78bfa 180deg 225deg, #34d399 225deg 270deg, #f472b6 270deg 315deg, #60a5fa 315deg 360deg)",
              }}
            >
              {labels.map((label, index) => {
                const sliceAngle = 360 / labels.length;
                const midAngle = sliceAngle * index + sliceAngle / 2;
                const labelOffset = -sliceAngle * 0.18; // tweak this!
                const finalAngle = midAngle + labelOffset;
                const distance = 40;
                const labelWidth = 120;

                return (
                  <div
                    key={index}
                    className="absolute whitespace-nowrap text-[10px] font-medium"
                    style={{
                      top: "50%",
                      left: "50%",
                      width: `${labelWidth}px`,
                      transform: `
          rotate(${finalAngle}deg)
          translate(${distance}px)
        `,
                      transformOrigin: "0 0",
                    }}
                  >
                    {label}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Spin Button */}
          <button
            onClick={spinWheel}
            className="rounded-4xl bg-green-500 px-6 py-2 font-semibold text-black shadow hover:cursor-pointer hover:bg-green-600"
          >
            🎯 Spin
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Spinner;
