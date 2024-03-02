import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useState, useEffect } from "react";

import { onValue, ref } from "firebase/database";
import { db } from "../utils/firebaseConfig";

const AboutMe = () => {
  const [aboutme1, setAboutMe1] = useState("");
  const [aboutme2, setAboutMe2] = useState("");
  useEffect(() => {
    const query = ref(db, "/");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setAboutMe1(data["aboutme1"]);
      setAboutMe2(data["aboutme2"]);
      //console.log(data);
    });
  }, []);
  return (
    <>
      <div id="aboutme" className="m-3">
        <SectionHeader sectionheader={"About Me"} maxW={"16em"} />
        <h4>{aboutme1}</h4>
        <h5>{aboutme2}</h5>
      </div>
    </>
  );
};

export default AboutMe;
