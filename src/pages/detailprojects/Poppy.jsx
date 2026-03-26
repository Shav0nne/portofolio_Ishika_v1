import ProjectDetail from "../../components/ProjectDetail";
import { images } from "../../utils/images";

export default function Poppy() {
    const project = {
        title: "Poppy",
        image: images.projects.poppy.main,
        live: "http://145.24.237.244",
        github: "https://github.com/Shav0nne/sonarpoppy",
        description: (
            <>
                <p>
                    Poppy is a music app that uses AI to recommend songs to users. The project is about
                    making AI recommendations clear and fair. We wanted to show users why certain music
                    is recommended to them.
                </p>
                <p>
                    This was a school project where we worked on case 2: "Transparent AI in Music
                    Recommendations". We looked at how recommendation systems work, what role AI plays,
                    and how users can understand why they get certain music suggestions.
                </p>
                <p>
                    Our team (Team 1A) worked together to build this app. We explored different music
                    APIs like Deezer and LastFM to get music data for our recommendations.
                </p>
            </>
        ),
        development: (
            <>
                <p>
                    <strong className="text-yellow-400">Team Project</strong> - Team 1A worked on this project
                    together. We focused on making AI music recommendations that users can understand and trust.
                </p>

                <p>
                    <strong className="text-yellow-400">What I did in this project (Back-end):</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Worked on user profile CRUD functions (Create, Read, Update, Delete)</li>
                    <li>Made friend features: send friend requests, accept, decline, and block users</li>
                    <li>Helped with viewing other user profiles</li>
                    <li>Helped design the database with an ERD diagram</li>
                    <li>Worked on the friend algorithm (unfortunately not finished due to time)</li>
                </ul>

                <p>
                    <strong className="text-yellow-400">The Project Setup:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Used MongoDB for the database</li>
                    <li>Used Express.js for the back-end framework</li>
                    <li>Looked at Deezer and LastFM APIs for music data</li>
                    <li>Made an ERD diagram to help plan the database structure</li>
                </ul>

                <p>
                    <strong className="text-yellow-400">What We Built:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>User profiles that you can create and edit</li>
                    <li>Friend system so users can connect with each other</li>
                    <li>AI model for music recommendations (started training)</li>
                    <li>Dashboards for curators to change the AI algorithm</li>
                    <li>30-second music previews for songs</li>
                    <li>Admin dashboard to manage users</li>
                    <li>Audit logging API to track AI changes</li>
                </ul>

                <p>
                    <strong className="text-yellow-400">Challenges:</strong>
                </p>
                <p>
                    The biggest challenge was time. We had 2 weeks to finish 17 user stories.
                    We worked hard but could not finish everything. The friend algorithm was something
                    I wanted to complete, but there was not enough time. We did finish the most important
                    features for the app to work.
                </p>
                <p>
                    We worked closely with the front-end team during stand-up and wrap-up meetings.
                    This helped us know what they needed from the back-end. We talked about priorities
                    and decided together what to build first.
                </p>
                <p>
                    This project taught me a lot about working in a bigger team, using MongoDB,
                    and building back-end features for a real app. I learned about CRUD operations,
                    friend systems, and how to plan a database with ERD diagrams.
                </p>
            </>
        ),
        techStack: [
            { name: "Express.js", icon: images.tech.express },
            { name: "MongoDB", icon: images.tech.mongodb },
            { name: "JavaScript", icon: images.tech.javascript },
            { name: "Node.js", icon: images.tech.nodejs }
        ],
        tools: [
            { name: "VS Code", icon: images.tech.vscode },
            { name: "GitHub", icon: images.tech.github },
            { name: "Git", icon: images.tech.git },
            { name: "Postman", icon: images.tech.postman }
        ],
        additionalImages: [
            {
                src: images.projects.poppy.erd,
                alt: "ERD diagram for database",
                caption: "ERD diagram I helped design for the database"
            },
            {
                src: images.projects.poppy.friend,
                alt: "Friend system interface",
                caption: "Friend system with requests"
            }
        ]
    };

    return <ProjectDetail project={project} />;
}