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

const colors = [
  "#4ade80",
  "#3b82f6",
  "#facc15",
  "#f87171",
  "#a78bfa",
  "#34d399",
  "#f472b6",
  "#60a5fa",
];

export default function Spinner() {
  const [rotation, setRotation] = useState(0);
  const sliceCount = labels.length;
  const sliceDeg = 360 / sliceCount;

  const spinWheel = () => {
    const extra = Math.floor(Math.random() * 360);
    setRotation((r) => r + 360 * 3 + extra);
  };

  // Draw a wedge path around (0,0)
  const describeWedge = (r, start, end) => {
    const toRad = (d) => (Math.PI / 180) * d;
    const x1 = r * Math.cos(toRad(start)),
      y1 = r * Math.sin(toRad(start));
    const x2 = r * Math.cos(toRad(end)),
      y2 = r * Math.sin(toRad(end));
    const large = end - start > 180 ? 1 : 0;
    return `M0,0 L${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} Z`;
  };

  return (
    <motion.div
      className="flex h-screen w-full items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* White card */}
      <div className="flex h-[550px] w-[850px] flex-col items-center justify-center rounded-2xl bg-white bg-opacity-80 p-8 shadow-lg">
        {/* Pointer */}
        <div className="z-10 mb-6 h-0 w-0 border-l-[12px] border-r-[12px] border-t-[20px] border-l-transparent border-r-transparent border-t-red-500" />

        {/* SVG wheel, centered with mx-auto */}
        <motion.svg
          className="mx-auto overflow-visible"
          width={400}
          height={400}
          viewBox="0 0 400 400"
          animate={{ rotate: rotation }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ transformOrigin: "200px 200px", transformBox: "fill-box" }}
        >
          <g transform="translate(200,200)">
            {labels.map((text, i) => {
              const start = sliceDeg * i - 90;
              const end = start + sliceDeg;
              const bisector = start + sliceDeg / 2;
              const r = 202; // radius
              const dist = 80; // label distance
              const boxW = 110; // box size
              const boxH = 40;

              return (
                <g key={i}>
                  {/* slice */}
                  <path
                    d={describeWedge(r, start, end)}
                    fill={colors[i]}
                    stroke="#eee"
                    strokeWidth="2"
                  />

                  {/* wrapped label */}
                  <g transform={`rotate(${bisector})`}>
                    <foreignObject
                      x={dist}
                      y={-boxH / 2}
                      width={boxW}
                      height={boxH}
                    >
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "start",
                          fontSize: "9px",
                          fontWeight: "500",
                          textAlign: "left",
                          padding: "2px",
                        }}
                      >
                        {text}
                      </div>
                    </foreignObject>
                  </g>
                </g>
              );
            })}
          </g>
        </motion.svg>

        {/* Spin button */}
        <button
          onClick={spinWheel}
          className="rounded-4xl mt-8 bg-green-500 px-6 py-2 font-semibold text-black shadow hover:bg-green-600 hover:text-white"
        >
          🎯 Spin
        </button>
      </div>
    </motion.div>
  );
}
