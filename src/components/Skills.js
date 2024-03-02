import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { onValue, ref } from "firebase/database";
import { db } from "../utils/firebaseConfig";
import Skill from "./Skill";
import SectionHeader from "./SectionHeader";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = ref(db, "/");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setSkills(data["skills"]);
      //console.log(data);
    });
  }, []);
  return (
    <>
      <div id="skills" className="m-3 pb-3">
        <SectionHeader sectionheader={"Skills"} maxW={"16em"} />
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
