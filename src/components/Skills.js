import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = ({ skills }) => {
  // const [skills, setSkills] = useState([]);

  // useEffect(() => {
  //   setSkills([
  //     {
  //       imgUrl:
  //         "https://cdn1.iconfinder.com/data/icons/education-set-3-3/74/15-512.png",
  //       skill: "React",
  //     },
  //     {
  //       imgUrl:
  //         "https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png",
  //       skill: "Flutter",
  //     },
  //   ]);
  // }, []);
  return (
    <>
      <div className="m-3 p-2">
        <motion.div
          initial={{ rotateY: 0 }}
          whileInView={{ rotateY: 18, scale: 1.05 }}
          transition={{ delay: 0.2, duration: 1 }}
          style={{
            backgroundColor: "rgba(20, 96, 255, 0.3)",
            transformStyle: "preserve-3d",
            transformPerspective: "1000px",
            maxWidth: "16em",
            backdropFilter: "blur(8px)",
          }}
          className="my-3 p-2 rounded-2 shadow-lg"
        >
          <h1>Skills</h1>
        </motion.div>
        <div>
          {skills.length === 0 ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            skills.map((skillMap, index) => (
              <Skill
                key={index}
                imageUrl={skillMap["imageUrl"]}
                skill={skillMap["skill"]}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Skills;
