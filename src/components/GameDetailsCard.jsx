import React from "react";
import { motion } from "framer-motion";

const GameDetailsCard = ({ game }) => {
  const { title, coverPhoto, category, downloadLink, description, ratings, developer } = game;

  return (
    <motion.div
      className="card bg-base-100 shadow-xl w-3/4 mx-auto overflow-hidden "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Game Image */}
      <motion.figure whileHover={{ scale: 1.05 }}>
        <img
          src={coverPhoto}
          alt={title}
          className="w-full h-80 object-cover transition-all duration-700"
        />
      </motion.figure>

      {/* Game Content */}
      <div className="card-body space-y-2">
        <motion.h2
          className="card-title text-2xl font-bold text-green-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="text-base-content/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>

        <div className="flex flex-wrap items-center justify-between mt-4">
          <motion.span
            className="badge badge-outline"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            {category}
          </motion.span>

          <motion.span
            className="text-yellow-500 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            ⭐ {ratings}
          </motion.span>
        </div>

        <motion.div
          className="flex justify-between items-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-base-content/70">Developer: {developer}</p>

          <a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline bg-green-500 text-white border-black btn-sm"
          >
            Download Now
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GameDetailsCard;
