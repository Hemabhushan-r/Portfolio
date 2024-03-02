import { motion } from "framer-motion";

const MotionHLine = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <>
      <motion.svg
        className="ms-3"
        width="88vw"
        height="10px"
        initial="hidden"
        animate="visible"
      >
        <motion.line
          x1="0"
          x2="100vw"
          y1="0"
          y2="0"
          stroke="rgba(20, 96, 255, 0.7)"
          strokeWidth="8px"
          strokeLinecap="round"
          variants={draw}
          custom={2}
        ></motion.line>
      </motion.svg>
    </>
  );
};

export default MotionHLine;
