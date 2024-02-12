import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Welcome from "../components/Welcome";
import BottomNavBar from "../components/BottomNavBar";
import "./styles.css";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../utils/firebaseConfig";

const Home = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = ref(db, "/");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setSkills(data["skills"]);
      console.log(data);
    });
  }, []);
  return (
    <div
      style={{
        //background: "linear-gradient(to right,#1c9fcf,#1c9fcf,#d3e4ff,#afeaff)",
        background: "linear-gradient(to right,#afeeff,#afeeff)",
        margin: "0em",
        padding: "1em",
      }}
    >
      <Welcome />
      <AboutMe />
      <Skills skills={skills} />
      <Projects />
      <BottomNavBar />
    </div>
  );
};

export default Home;
