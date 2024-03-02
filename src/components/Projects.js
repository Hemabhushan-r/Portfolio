import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

import { onValue, ref } from "firebase/database";
import { db } from "../utils/firebaseConfig";
import SectionHeader from "./SectionHeader";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const query = ref(db, "/");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setProjects(data["projects"]);
      //console.log(data);
    });
  }, []);
  return (
    <>
      <div id="projects" className="m-3">
        <SectionHeader sectionheader={"Projects"} maxW={"16em"} />
        {/* description : "" gifUrl : "" imageUrl : "" otherUrls : "" skill : ""
        title : ""  */}
        {projects.map((project) => (
          <ProjectCard
            title={project["title"]}
            description={project["description"]}
            gifUrl={project["gifUrl"]}
            imageUrl={project["imageUrl"]}
            otherUrls={project["otherUrls"]}
            skill={project["skill"]}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
