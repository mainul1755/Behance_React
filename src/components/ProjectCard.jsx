import React from "react";

const ProjectCard = ({ image, title, description, likes, views }) => {
  return (
    <div className="flex flex-col group cursor-pointer ">
      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-65.1175 object-cover rounded-xl transform transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Details */}
      <div className="mt-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold">{title}</h3>
        
        <div className="flex items-center justify-between text-gray-400 text-xs">
          <div className="flex items-center space-x-2">
            <span>👍 {likes}</span>
            <span>👁️ {views}</span>
          </div>
        </div>
        
    </div>  
        <p className="text-gray-500 text-xs mb-2">{description}</p>
    
    </div>
  );
};

export default ProjectCard;
