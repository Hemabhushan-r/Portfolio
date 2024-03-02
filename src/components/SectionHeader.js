import { motion } from "framer-motion";

const SectionHeader = ({ sectionheader, maxW }) => {
  return (
    <motion.div
      initial={{ rotateY: 0 }}
      whileInView={{ rotateY: 22, scale: 1.05 }} //rotateY: 18
      transition={{ delay: 0.2, duration: 0.7 }}
      style={{
        backgroundColor: "rgba(20, 96, 255, 0.3)",
        transformStyle: "preserve-3d",
        transformPerspective: "1000px",
        maxWidth: maxW,
        backdropFilter: "blur(8px)",
      }}
      className="my-3 p-2 rounded-2 shadow-lg"
    >
      <h1>{sectionheader}</h1>
    </motion.div>
  );
};

export default SectionHeader;
