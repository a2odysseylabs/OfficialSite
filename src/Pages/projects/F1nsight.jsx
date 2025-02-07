import React from "react";
import ProjectTemplate from "./ProjectTemplate";

const F1nsight = () => {

    const content = (
        <>
        </>
    )

    return (
        <ProjectTemplate
            title="F1nsight - Formula 1 Data Visualization Platform"
            techStack={["react", "tailwind", "threejs", "d3js", "webxr", "d3", "recharts"]}
            images={[
                "/images/f1nsight-screenshot1.png",
                "/images/f1nsight-screenshot2.png",
                "/images/f1nsight-screenshot3.png",
            ]}
            liveLink="https://www.f1nsight.com"
            // githubLink="https://github.com/antoni/f1nsight"
        >
            <h2 className="heading-2 text-amber-600">Project Overview</h2>
            <p>F1nsight is an innovative platform designed to offer comprehensive analysis and insights into Formula 1 racing. Built to provide fans and data enthusiasts with an interactive, data-driven experience, F1nsight allows users to explore race results, driver and team performance metrics, and much more. The platform is ideal for those seeking a deeper understanding of F1 races, whether you’re a casual fan or a data scientist looking for granular race statistics.</p>

            <h2 className="heading-2 text-amber-600">Purpose</h2>
            <div className="space-y-4">
                <p>The goal of F1nsight is to bridge the gap between the excitement of racing and the analytical power of data. By creating an interactive platform, F1nsight empowers users to:</p>
                <ul className="list-disc ml-8">
                    <li>Explore race data from lap times to tire strategies.</li>
                    <li>Compare drivers and teams through head-to-head statistics and historical performance metrics.</li>
                    <li>Visualize telemetry data in an engaging, immersive 3D environment.</li>
                    <li>Learn about the history of F1 teams, their legacy, and transformations over the years.</li>
                </ul>
                <p>Through these features, F1nsight offers a unique way for users to engage with F1 data, explore racing trends, and even interact with their favorite F1 cars through Augmented Reality (AR).</p>
            </div>

            <h2 className="heading-2 text-amber-600">Core Features</h2>
            <div className="space-y-4">
                <h3 className="heading-4">Race Data & Driver Insights</h3>
                <p>F1nsight allows users to explore in-depth race data, including lap times, tire strategies, and fastest laps. With powerful filtering and sorting tools, users can analyze past races and compare the performance of their favorite drivers across seasons.</p>
            </div>
            <div className="space-y-4">
                <h3 className="heading-4">Driver & Team Comparisons</h3>
                <p>With the built-in comparison tool, F1nsight allows you to pit two drivers or teams head-to-head, analyzing their race finishes, pole positions, wins, and more. This tool enables users to dig deeper into driver stats and discover how they stack up against each other on the track.</p>
                </div>
            <div className="space-y-4">
                <h3 className="heading-4">Interactive Telemetry Viewer</h3>
                <p>Our interactive 3D telemetry viewer allows users to explore race data in real-time. Whether you’re interested in lap-by-lap data or live tracking, you can visualize driver speeds, tire usage, and lap times in an immersive 3D environment.</p>
            </div>
            <div className="space-y-4">
                <h3 className="heading-4">Team History Exploration</h3>
                <p>F1nsight also showcases the rich history of Formula 1 teams, tracing their legacy from their formation to the present. Learn about their achievements, championship wins, and the various name changes of iconic teams such as Mercedes, Ferrari, and Red Bull.</p>
            </div>
            <div className="space-y-4">
                <h3 className="heading-3">Augmented Reality (AR) Viewer</h3>
                <p>One of the standout features of F1nsight is the AR viewer that lets you place a 3D model of an F1 car in your environment. Move around the car, inspect every detail, and take stunning photos or videos to share with friends and other F1 enthusiasts.</p>
            </div>

            <h2 className="heading-2 text-amber-600">Technological Challenges Overcome</h2>
            <div className="space-y-4">
                <p>During the development of F1nsight, there were several challenges related to handling real-time data visualization and presenting race statistics in a clear and engaging manner. One of the most complex features was the creation of the Interactive Telemetry Viewer, which required integrating 3D modeling and real-time data updates. We overcame this challenge by leveraging Three.js for 3D rendering and integrating race data from external APIs to ensure accuracy.</p>
                <p>Another significant challenge was ensuring that the AR viewer was fully mobile-responsive, allowing users to interact with the AR F1 car model on both phones and tablets. We used Model-Viewer to integrate AR seamlessly, allowing users to bring the F1 cars into their physical environment.</p>
            </div>


            <h2 className="heading-2 text-amber-600">Conclusion</h2>
            <div className="space-y-4">
                F1nsight represents the future of F1 data analysis, combining technical data with interactive features to provide fans, analysts, and developers with a comprehensive view of the sport. With features like driver comparisons, race insights, AR integration, and a deep dive into team histories, F1nsight is more than just a platform – it’s a way to experience Formula 1 like never before.
            </div>

            <h2 className="heading-2 text-amber-600">Future Developments</h2>
            <div className="space-y-4">
                <p>F1nsight is an ongoing project, and we’re continuously working on new features and improvements. Future updates will include:</p>
                <ul className="list-disc ml-8">
                    <li>Expanded data coverage with more advanced metrics.</li>
                    <li>Live telemetry tracking during races.</li>
                    <li>Advanced performance predictions based on historical data.</li>
                    <li>Enhanced AR experiences with more F1 car models.</li>
                </ul>
            </div>
        </ProjectTemplate>
    );
};

export default F1nsight;
