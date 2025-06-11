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
  const [innerRot, setInnerRot] = useState(0);
  const [outerRot, setOuterRot] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({ inner: 1, outer: "A" });

  const spinWheel = () => {
    const extraI = Math.random() * 360;
    const extraO = Math.random() * 360;
    const newInner = innerRot + 360 * 3 + extraI;
    const newOuter = outerRot + 360 * 2 + extraO;
    setInnerRot(newInner);
    setOuterRot(newOuter);

    setTimeout(() => {
      const innerSlice = 360 / innerLabels.length;
      const targetInner = ((-newInner % 360) + 360) % 360;
      const innerIndex =
        Math.floor(((targetInner + 90) % 360) / innerSlice) + 1;

      const outerSlice = 360 / outerLabels.length;
      const targetOuter = ((newOuter % 360) + 360) % 360;
      const outerIdx = Math.floor(((targetOuter + 90) % 360) / outerSlice);
      const outerLetter = String.fromCharCode(65 + outerIdx);

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

  const innerDeg = 360 / innerLabels.length;
  const outerDeg = 360 / outerLabels.length;

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
          <div className="flex w-full items-start justify-center gap-12">
            <div className="relative flex flex-1 items-center justify-center">
              {/* Pointer on the right */}
              <div className="absolute right-16 top-1/2 h-0 w-0 -translate-y-1/2 border-b-[12px] border-r-[20px] border-t-[12px] border-b-transparent border-r-red-500 border-t-transparent" />

              {/* Wheel */}
              <svg
                width={450}
                height={450}
                viewBox="0 0 450 450"
                className="overflow-visible"
              >
                <g transform="translate(225,225)">
                  {/* Outer (CCW) */}
                  <motion.g
                    animate={{ rotate: -outerRot }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  >
                    {outerLabels.map((_, i) => {
                      const start = outerDeg * i - 90;
                      return (
                        <g key={i}>
                          <path
                            d={describeWedge(200, start, start + outerDeg)}
                            fill={outerColors[i]}
                            stroke="#ddd"
                            strokeWidth="2"
                          />
                          <g transform={`rotate(${start + outerDeg / 2})`}>
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
                  </motion.g>

                  {/* Inner (CW) */}
                  <motion.g
                    animate={{ rotate: innerRot }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  >
                    {innerLabels.map((_, i) => {
                      const start = innerDeg * i - 90;
                      return (
                        <g key={i}>
                          <path
                            d={describeWedge(120, start, start + innerDeg)}
                            fill={innerColors[i]}
                            stroke="#eee"
                            strokeWidth="2"
                          />
                          <g transform={`rotate(${start + innerDeg / 2})`}>
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
                  </motion.g>
                </g>
              </svg>
            </div>

            {/* Legend */}
            <div className="h-[420px] max-w-[200px] space-y-2 overflow-auto pr-2 text-sm">
              {innerLabels.map((t, i) => (
                <div key={i}>
                  <span className="font-bold">{i + 1}.</span> {t}
                </div>
              ))}
              <hr className="my-4" />
              {outerLabels.map((t, i) => (
                <div key={i}>
                  <span className="font-bold">
                    {String.fromCharCode(65 + i)}.
                  </span>{" "}
                  {t}
                </div>
              ))}
            </div>
          </div>

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
