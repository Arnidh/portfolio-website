"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function MotionWrapper({ children, className, delay = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.25, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
