import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypingText = ({ text, delay = 50 }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        if (currentIndex < text.length) {
          return prevText + text[currentIndex];
        } else {
          clearInterval(interval);
          setShowCursor(false);
          return prevText;
        }
      });
      currentIndex++;
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [text, delay]);

  return (
    <motion.span>
      {displayText}
      <motion.span animate={{ opacity: showCursor ? 1 : 0 }}>|</motion.span>
    </motion.span>
  );
};

export default React.memo(TypingText);
