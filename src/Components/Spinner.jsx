import React, { useState } from "react";
import { motion } from "framer-motion";
import ResultModal from "./ResultModal";

const innerLabels = [
  "TEAL mobile DNA double, one copy moves to a nearby microbe",
  "Remove a mobile DNA from any microbe",
  "Remove a RED mobile DNA",
  "Pick a new mobile DNA and add it to a microbe",
  "Nobody moves! Mobile DNA stay where they are",
  "Add a RED mobile DNA to any microbe",
  "Remove a TEAL mobile DNA",
  "RED mobile DNA double, one copy moves to a nearby microbe",
];
const innerColors = [
  "#4ade80",
  "#3b82f6",
  "#facc15",
  "#f87171",
  "#a78bfa",
  "#34d399",
  "#f472b6",
  "#60a5fa",
];

const outerLabels = [
  "All GREEN microbes and their DNA double",
  "All PINK microbes and their DNA double",
  "YELLOW microbes are removed unless they have TEAL mobile DNA",
  "PINK microbes are removed unless they have RED mobile DNA",
  "Microbes with mobile DNA are doubled",
  "All microbes without mobile DNA are removed",
  "ORANGE microbes are removed unless they have TEAL mobile DNA",
  "Microbes with mobile DNA are removed",
  "BLUE microbes with a RED mobile DNA double",
  "GREEN microbes with a TEAL mobile DNA double",
  "Microbes with RED mobile DNA double",
  "Microbes with TEAL mobile DNA double",
  "Microbes with RED mobile DNA are removed",
  "Microbes with TEAL mobile DNA are removed",
  "All BLUE microbes are removed, along with their mobile DNA",
  "All ORANGE microbes are removed, along with their mobile DNA",
];
const outerColors = [
  "#22c55e",
  "#ec4899",
  "#eab308",
  "#f472b6",
  "#3b82f6",
  "#a855f7",
  "#10b981",
  "#f87171",
  "#38bdf8",
  "#2dd4bf",
  "#fcd34d",
  "#8b5cf6",
  "#f43f5e",
  "#06b6d4",
  "#f97316",
  "#94a3b8",
];

export default function Spinner() {
  const [rotation, setRotation] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({ inner: 1, outer: "A" });

  const spinWheel = () => {
    const extra = Math.floor(Math.random() * 360);
    const newRot = rotation + 360 * 3 + extra;
    setRotation(newRot);

    setTimeout(() => {
      // detect inner
      const innerDeg = 360 / innerLabels.length;
      let innerAngle = ((newRot % 360) + innerDeg / 2 + 360) % 360;
      const innerIndex = Math.floor(innerAngle / innerDeg) + 1;

      // detect outer (opposite spin)
      const outerDeg = 360 / outerLabels.length;
      let outerAngle = ((-newRot % 360) + outerDeg / 2 + 360) % 360;
      const outerIndex = Math.floor(outerAngle / outerDeg);
      const outerLetter = String.fromCharCode(65 + outerIndex);

      setResult({ inner: innerIndex, outer: outerLetter });
      setShowResult(true);
    }, 2100);
  };

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
    <>
      <motion.div
        className="flex h-screen w-full items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative flex h-[550px] w-[900px] flex-col items-center justify-center rounded-2xl bg-white bg-opacity-80 p-8 shadow-lg">
          {/* Spinner + Legend */}
          <div className="flex w-full items-start justify-center gap-12">
            {/* Wheel & Pointer */}
            <div className="relative flex flex-1 items-center justify-center">
              {/* Pointer */}
              <div className="absolute -top-4 left-1/2 z-10 h-0 w-0 -translate-x-1/2 border-b-[20px] border-l-[12px] border-r-[12px] border-b-red-500 border-l-transparent border-r-transparent" />

              {/* SVG wheel */}
              <motion.svg
                width={450}
                height={450}
                viewBox="0 0 450 450"
                className="overflow-visible"
                animate={{ rotate: rotation }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{
                  transformOrigin: "225px 225px",
                  transformBox: "fill-box",
                }}
              >
                <g transform="translate(225,225)">
                  {/* Outer 16 slices */}
                  {outerLabels.map((_, i) => {
                    const deg = 360 / outerLabels.length;
                    const start = deg * i - 90;
                    const bis = start + deg / 2;
                    return (
                      <g key={i}>
                        <path
                          d={describeWedge(200, start, start + deg)}
                          fill={outerColors[i]}
                          stroke="#ddd"
                          strokeWidth="2"
                        />
                        <g transform={`rotate(${bis})`}>
                          <text
                            x={160}
                            y={0}
                            fontSize="12"
                            fontWeight="600"
                            textAnchor="middle"
                          >
                            {String.fromCharCode(65 + i)}
                          </text>
                        </g>
                      </g>
                    );
                  })}

                  {/* Inner 8 slices */}
                  {innerLabels.map((_, i) => {
                    const deg = 360 / innerLabels.length;
                    const start = deg * i - 90;
                    const bis = start + deg / 2;
                    return (
                      <g key={i}>
                        <path
                          d={describeWedge(120, start, start + deg)}
                          fill={innerColors[i]}
                          stroke="#eee"
                          strokeWidth="2"
                        />
                        <g transform={`rotate(${bis})`}>
                          <text
                            x={80}
                            y={0}
                            fontSize="16"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            {i + 1}
                          </text>
                        </g>
                      </g>
                    );
                  })}
                </g>
              </motion.svg>
            </div>

            {/* Legend */}
            <div className="h-[420px] max-w-[200px] space-y-2 overflow-auto pr-2 text-sm">
              {innerLabels.map((text, i) => (
                <div key={i}>
                  <span className="font-bold">{i + 1}.</span> {text}
                </div>
              ))}
              <hr className="my-4" />
              {outerLabels.map((text, i) => (
                <div key={i}>
                  <span className="font-bold">
                    {String.fromCharCode(65 + i)}.
                  </span>{" "}
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Spin button */}
          <button
            onClick={spinWheel}
            className="rounded-4xl mt-6 bg-green-500 px-6 py-2 font-semibold text-black shadow hover:bg-green-600 hover:text-white"
          >
            🎯 Spin
          </button>
        </div>
      </motion.div>

      {showResult && (
        <ResultModal
          inner={result.inner}
          outer={result.outer}
          labels={innerLabels}
          outerLabels={outerLabels}
          onClose={() => setShowResult(false)}
        />
      )}
    </>
  );
}
