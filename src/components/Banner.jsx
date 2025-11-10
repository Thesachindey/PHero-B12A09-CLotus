import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import pubgImg from "../assets/pubg.jpg";
import assassinImg from "../assets/assassin.jpg";
import valorantImg from "../assets/valorant-.jpg";

const Banner = () => {
  const images = [pubgImg, assassinImg, valorantImg];
  const [current, setCurrent] = useState(0);

  // Automatically change slide 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[500px] rounded-b-2xl overflow-hidden ">
      <AnimatePresence mode="wait">
        <motion.img
          key={current} // important for triggering exit/enter animation
          src={images[current]}
          alt={`banner-${current}`}
          className="absolute w-full h-full object-cover  "
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Optional overlay for text or gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-500 to-transparent flex flex-col justify-end p-10">
        <motion.h2
          key={current + "-text"}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl md:text-5xl font-bold"
        >
          {current === 0 && "Player Unknown's Battlegrounds"}
          {current === 1 && "Assassin’s Creed Adventure"}
          {current === 2 && "Valorant Tactical Shooter"}
        </motion.h2>
        <motion.p
          key={current + "-desc"}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-200 mt-3 max-w-xl"
        >
          {current === 0 &&
            "Jump into the battleground and fight for survival with friends."}
          {current === 1 &&
            "Experience the world of stealth and parkour in ancient cities."}
          {current === 2 &&
            "Join the agents and dominate every match with your skills."}
        </motion.p>
      </div>
    </div>
  );
};

export default Banner;
