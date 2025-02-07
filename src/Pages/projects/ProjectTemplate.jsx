import React from "react";
import TechLogoItem from "../../components/TechLogoItem";

const ProjectTemplate = ({
    title,
    children,
    techStack,
    images,
    liveLink,
    githubLink,
}) => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-40 space-y-12">
            {/* Project Title */}
            <h1 className="heading-1">{title}</h1>

            {/* Project content */}
            {children}

            {/* Technologies Used */}
            {techStack && techStack.length > 0 && (
                <>
                    <h2 className="heading-2 text-amber-600">
                        Technologies Used
                    </h2>
                    <ul className="flex flex-wrap gap-4 mt-4">
                        {techStack.map((tech, index) => (
                            <li key={index}>
                                <TechLogoItem icon={tech} name={tech} />
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {/* Project Screenshots or Visuals */}
            <h2 className="heading-2 text-amber-600">
                Screenshots and Visuals
            </h2>
            {images && images.length > 0 && (
                <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden shadow-lg"
                        >
                            <img
                                src={image}
                                alt={`Project Screenshot ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* Project Links */}
            <div className="flex justify-center gap-8 mb-12">
                {liveLink && (
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
                    >
                        View Live Project
                    </a>
                )}
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
                    >
                        View on GitHub
                    </a>
                )}
            </div>

            {/* Conclusion */}
            <div className="text-center">
                <p className="text-lg text-gray-600">
                    Feel free to explore and reach out for any questions or
                    potential collaborations!
                </p>
            </div>
        </div>
    );
};

export default ProjectTemplate;
