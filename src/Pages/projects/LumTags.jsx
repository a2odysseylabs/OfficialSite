import React from "react";
import ProjectTemplate from "./ProjectTemplate";

const LumTags = () => {

    return (
        <ProjectTemplate
            title="LumTags"
            techStack={["react", "nodejs", "express", "mongodb", "nodejs", "aws", "rekognition"]}
            images={[
                "/images/f1nsight-screenshot1.png",
                "/images/f1nsight-screenshot2.png",
                "/images/f1nsight-screenshot3.png",
            ]}
            liveLink="https://www.lumtags.com"
            // githubLink="https://github.com/antoni/f1nsight"
        >
            <h2 className="heading-2 text-amber-600">Project Overview</h2>
            <p>Lumetry LumTags is a cutting-edge event photography platform designed to deliver instant, private, and AI-powered photo galleries. Using facial recognition, the platform automatically identifies attendees in event photos and provides them with a personalized gallery of images featuring them.</p>

            <h2 className="heading-2 text-amber-600">Purpose</h2>
            <p>LumTags was created to streamline the event photography experience, eliminating the need for manual photo searching. Whether for weddings, corporate events, or social gatherings, attendees can effortlessly receive a private gallery containing only their spotted photos, ensuring privacy and convenience.</p>

            <h2 className="heading-2 text-amber-600">Core Features</h2>
            <ul className="list-disc ml-8">
                <li>Instant Photo Uploads: Event photographers can upload images in real-time to the client’s private gallery.</li>
                <li>Private & Secure Galleries: Each attendee receives a personal gallery featuring only their images.</li>
                <li>Easy Registration: Attendees can register during or after the event to access their curated gallery.</li>
                <li>Seamless Sharing: Users can easily download and share their images.</li>
            </ul>
            
            <h2 className="heading-2 text-amber-600">Development Insights</h2>
            <ul className="list-disc ml-8">
                <li>Implemented a highly scalable infrastructure to handle thousands of images per event.</li>
                <li>Private & Secure Galleries: Each attendee receives a personal gallery featuring only their images.</li>
                <li>Optimized AI processing to balance accuracy and speed for real-time tagging.</li>
                <li>Built a seamless user registration and authentication system for private access control.</li>
            </ul>

            <h2 className="heading-2 text-amber-600">Technological Challenges Overcome</h2>
            <div className="space-y-4">
                <p>During the development of F1nsight, there were several challenges related to handling real-time data visualization and presenting race statistics in a clear and engaging manner. One of the most complex features was the creation of the Interactive Telemetry Viewer, which required integrating 3D modeling and real-time data updates. We overcame this challenge by leveraging Three.js for 3D rendering and integrating race data from external APIs to ensure accuracy.</p>
                <p>Another significant challenge was ensuring that the AR viewer was fully mobile-responsive, allowing users to interact with the AR F1 car model on both phones and tablets. We used Model-Viewer to integrate AR seamlessly, allowing users to bring the F1 cars into their physical environment.</p>
            </div>


            <h2 className="heading-2 text-amber-600">Conclusion</h2>
            <p>
                LumTags revolutionizes event photography by delivering a seamless, AI-powered photo experience. Attendees no longer have to sift through hundreds of event photos; instead, they receive a curated gallery featuring only their images, enhancing privacy and engagement.
            </p>
        </ProjectTemplate>
    );
};

export default LumTags;
