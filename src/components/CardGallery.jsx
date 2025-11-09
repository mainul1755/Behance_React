import React from "react";
import ProjectCard from "../components/ProjectCardA";
import { projectsA } from "../data.js";
const ProjectGallery = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-8xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projectsA.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            likes={item.likes}
            views={item.views}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
