// src/App.jsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Components/Home";
import Spinner from "./Components/Spinner";
import Rules from "./Components/Rules";
import clickSoundFile from "/button-click.mp3";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/spinner" element={<Spinner />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  useEffect(() => {
    const audio = new Audio(clickSoundFile);
    audio.volume = 0.5;

    const handleClick = (e) => {
      // only play when a <button> (or something inside one) is clicked
      if (e.target.closest("button")) {
        audio.currentTime = 0;
        audio.play();
      }
    };

    // use capture phase so this runs before any stopPropagation()
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
