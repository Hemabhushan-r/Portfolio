import React from "react";
import { motion } from "framer-motion";
import TypingText from "./TypingText";
import SectionHeader from "./SectionHeader";

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
        <SectionHeader sectionheader={"Hi, I'm Hema Bhushan"} maxW={"30em"} />

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
