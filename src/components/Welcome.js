import React from "react";
import { motion } from "framer-motion";
import TypingText from "./TypingText";

const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      style={{ paddingTop: "7em" }}
    >
      <div className="m-3 p-2">
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 18, scale: 1.05 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          style={{
            backgroundColor: "rgba(20, 96, 255, 0.3)",
            transformStyle: "preserve-3d",
            transformPerspective: "1000px",
            maxWidth: "30em",
            backdropFilter: "blur(8px)",
          }}
          className="my-2 p-2 rounded-2 shadow-lg"
        >
          <h1>Hi, I'm Hema Bhushan</h1>
        </motion.div>

        <h3>
          <TypingText
            text={
              "I  develop web ,mobile applications , games and build ML and DL models"
            }
            delay={50}
          />
        </h3>
      </div>
    </motion.div>
  );
};

export default React.memo(Welcome);
