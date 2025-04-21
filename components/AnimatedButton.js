import { motion } from "framer-motion";

export default function AnimatedButton({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-3 bg-blue-600 text-white rounded-lg shadow hover:shadow-lg"
    >
      {children}
    </motion.button>
  );
}
