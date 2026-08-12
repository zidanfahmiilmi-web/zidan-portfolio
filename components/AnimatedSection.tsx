"use client";
import { motion } from "framer-motion";

export default function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }} 
      viewport={{ once: false, amount: 0.3 }} 
      // once: false → animasi berulang setiap kali section masuk viewport
      // amount: 0.3 → animasi dipicu saat 30% elemen terlihat (lebih stabil, mengurangi flicker)
    >
      {children}
    </motion.div>
  );
}
