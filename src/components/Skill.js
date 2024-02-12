import { motion, useMotionValue } from "framer-motion";

import react from "../assets/images/react.png";
const Skill = ({ imageUrl, skill }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, translateZ: "180px" }}
      className="d-inline-block mx-3"
      style={{
        width: "5em",
        height: "5em",
        filter: "drop-shadow(0px 0px 8px rgba(0,0,0,0.3))",
      }}
    >
      <div
        style={{
          width: "5em",
          height: "5em",
          background: "rgba(20,96,255,0.8)",
        }}
        className="shadow-lg d-flex rounded-circle justify-content-center align-items-center"
      >
        <motion.img
          src={imageUrl}
          style={{
            maxHeight: "3.2em",
            maxWidth: "3.2em",
            transformStyle: "preserve-3d",
            transformPerspective: "1000px",
            filter: "drop-shadow(3px 3px 15px rgb(0,0,0,0.8))",
          }}
        />
      </div>
      <div
        style={{ marginTop: "-0.5em", background: "rgba(20,96,255)" }}
        className="shadow-lg d-flex rounded-4 justify-content-center text-center fw-bold"
      >
        {skill}
      </div>
    </motion.div>
  );
};

export default Skill;
