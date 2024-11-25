import React from "react";

const ProjectCard = ({ title, description }) => {
  return (
    <div className="card-style flex flex-col justify-between">
      {/* Image Placeholder */}
      <div className="bg-purple-700 rounded-md h-48 w-full mb-4"></div>
      {/* Project Title */}
      <h3 className="text-xl font-semibold text-purple-500">{title}</h3>
      {/* Project Description */}
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default ProjectCard;