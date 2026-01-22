"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type RotatingTextProps = {
  items: string[];
  period?: number;
};

export default function RotatingText({ items, period = 2500 }: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, period);

    return () => clearInterval(interval);
  }, [items.length, period]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={items[index]}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="inline-block"
      >
        {items[index]}
      </motion.span>
    </AnimatePresence>
  );
}
