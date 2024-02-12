import { animate, useMotionValue, motion, useTransform } from "framer-motion";

import githubimg from "../assets/images/download.jpg";
import githubgif from "../assets/images/github.gif";
import { useEffect, useRef, useState } from "react";

const ProjectCard = () => {
  const cardRef = useRef();
  const [val, setVal] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(rect.left + rect.width / 2);
    mouseY.set(rect.top + rect.height / 2);
    setImgUrl(githubimg);
  }, []);

  const sensitivity = 20;
  const translateX = useTransform(mouseX, (newMouseX) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newTranslateX = newMouseX - rect.left - rect.width / 2;
    return `${newTranslateX * 0.1}px`;
  });
  const translateY = useTransform(mouseY, (newMouseY) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newTranslateY = newMouseY - rect.top - rect.height / 2;
    return `${newTranslateY * 0.1}px`;
  });
  const rotateX = useTransform(mouseY, (newMouseY) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateX = newMouseY - rect.top - rect.height / 2;
    console.log("rotateX", `${(newRotateX / rect.height) * sensitivity}deg`);
    return `${(newRotateX / rect.height) * sensitivity}deg`;
  });
  const rotateY = useTransform(mouseX, (newMouseX) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateY = newMouseX - rect.left - rect.width / 2;
    console.log(
      "rotateY",
      `${(newRotateY / rect.width) * sensitivity * -1}deg`
    );
    return `${(newRotateY / rect.width) * sensitivity * -1}deg`;
  });

  return (
    <>
      <motion.div
        className="shadow-lg rounded-4 m-2 card"
        ref={cardRef}
        onMouseOver={(e, e_info) => {
          animate(mouseX, e.clientX);
          animate(mouseY, e.clientY);
        }}
        onMouseLeave={(e, e_info) => {
          const rect = cardRef.current.getBoundingClientRect();
          animate(mouseX, rect.left + rect.width / 2);
          animate(mouseY, rect.top + rect.height / 2);
        }}
        onHoverStart={() => {
          setImgUrl(githubgif);
        }}
        onHoverEnd={() => {
          setImgUrl(githubimg);
        }}
        whileHover={{ scale: 1.01 }}
        style={{
          width: "20em",
          background: "rgba(20, 96, 255, 0.5)",
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
          translateX,
          translateY,
          transformPerspective: "1000px",
        }}
      >
        <motion.img
          src={imgUrl}
          style={{ width: "19.8em", height: "12em" }}
          className="rounded-4 p-2 card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
