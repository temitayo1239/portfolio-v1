'use client';

import { motion } from 'framer-motion';

export default function AnimatedBlobBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-[#020617]">
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[140px]"
      />
      <motion.div
        animate={{
          x: [0, -90, 50, 0],
          y: [0, 70, -40, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[130px]"
      />
    </div>
  );
}