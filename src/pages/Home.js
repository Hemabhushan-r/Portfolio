import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Welcome from "../components/Welcome";
import BottomNavBar from "../components/BottomNavBar";
import { motion } from "framer-motion";
import "./styles.css";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../utils/firebaseConfig";
import MotionHLine from "../components/MotionHLine";

const Home = () => {
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
      <MotionHLine />

      <AboutMe />
      <MotionHLine />
      <Skills />
      <MotionHLine />
      <Projects />
      <BottomNavBar />
    </div>
  );
};

export default Home;
