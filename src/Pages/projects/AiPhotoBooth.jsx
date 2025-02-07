import React from "react";
import ProjectTemplate from "./ProjectTemplate";

const AiPhotoBooth = () => {

    return (
        <ProjectTemplate
            title="Lumetry AI Photo Booth"
            techStack={["reactnative", "comfyui", "pytorch", "tensorflowjs", "mongodb", "nodejs", "express", "d3", "recharts"]}
            images={[
                "/images/f1nsight-screenshot1.png",
                "/images/f1nsight-screenshot2.png",
                "/images/f1nsight-screenshot3.png",
            ]}
            // liveLink="https://www.f1nsight.com"
            // githubLink="https://github.com/antoni/f1nsight"
        >
            <h2 className="heading-2 text-amber-600">Project Overview</h2>
            <p>Lumetry AI Photo Booth is a React Native mobile application designed to transform user photos into AI-generated portraits with creative enhancements. By leveraging artificial intelligence, the app enables users to generate stylized images while maintaining core facial features and identities.</p>

            <h2 className="heading-2 text-amber-600">Purpose</h2>
            <p>The app was created to provide an engaging and interactive experience for users looking to explore AI-generated imagery. Whether for entertainment, artistic expression, or personalization, Lumetry AI Photo Booth allows users to see themselves in unique, AI-enhanced styles.</p>

            <h2 className="heading-2 text-amber-600">Core Features</h2>
            <ul className="list-disc ml-8">
                <li>AI-Powered Image Transformation: Converts user photos into stylized AI portraits while preserving facial identity.</li>
                <li>Custom Styling Options: Users can choose from various AI-generated effects and enhancements.</li>
                <li>Simple and Intuitive UI: Designed with a seamless user experience in mind, allowing for effortless photo uploads and transformations.</li>
                <li>Fast Processing: Uses optimized AI models to generate results quickly without compromising quality.</li>
            </ul>

            <h2 className="heading-2 text-amber-600">Technological Challenges Overcome</h2>
            <div className="space-y-4">
                <p>During the development of F1nsight, there were several challenges related to handling real-time data visualization and presenting race statistics in a clear and engaging manner. One of the most complex features was the creation of the Interactive Telemetry Viewer, which required integrating 3D modeling and real-time data updates. We overcame this challenge by leveraging Three.js for 3D rendering and integrating race data from external APIs to ensure accuracy.</p>
                <p>Another significant challenge was ensuring that the AR viewer was fully mobile-responsive, allowing users to interact with the AR F1 car model on both phones and tablets. We used Model-Viewer to integrate AR seamlessly, allowing users to bring the F1 cars into their physical environment.</p>
            </div>


            <h2 className="heading-2 text-amber-600">Conclusion</h2>
            <p>
                Lumetry AI Photo Booth showcases the power of AI in digital creativity, blending technology with personal expression. The app is an example of how AI can be used to enhance user experiences in mobile applications.
            </p>
        </ProjectTemplate>
    );
};

export default AiPhotoBooth;
