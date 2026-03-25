import { Link } from "react-router-dom";

export default function Projects() {
    const projects = [
        {
            id: "the-bizarre-kribo-adventure",
            title: "The Bizarre Kribo Adventure",
            description: "An raging game with obstacles and gameplay mechanics.",
            image: "/src/images/ScreenshotKriboGame.png",
            live: "https://shav0nne.github.io/The_Bizzare_Kribo_Adventure/"
        },
        {
            id: "planet-keeper",
            title: "Planet Keeper",
            description: "A world focused game on environmental awareness through interactive gameplay.",
            image: "/src/images/ScreenshotPlanetKeeper.png",
            live: "https://planet-keeper.itch.io/planet-keeper"
        },
        {
            id: "kingdom-hearts-guide",
            title: "Kingdom Hearts Guide Website",
            description: "A comprehensive guide website for Kingdom Hearts game mechanics and strategies.",
            image: "/src/images/KingdomHeartsGuide.png",
            live: "https://github.com/Shav0nne/kingdom-hearts-guides"
        },
        {
            id: "poppy",
            title: "Poppy",
            description: "A creative project exploring unique game mechanics and visual storytelling.",
            image: "/src/images/Poppy.png",
            live: "http://145.24.237.244"
        },
        {
            id: "trippie",
            title: "Trippie",
            description: "An experimental project combining music visualization with interactive elements.",
            image: "/src/images/Trippie.png",
            live: "https://project.cmi.hr.nl/2024_2025/cle3_t10/trippie/"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-yellow-400 mb-4">Projects</h1>
            <p className="text-gray-300 mb-12 text-lg">My projects!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                        {/* Project Image */}
                        <div className="h-48 bg-gray-700 relative">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" onError={(e) => {
                                    e.target.src = "/";}}
                            />
                        </div>

                        {/* Project Content */}
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-yellow-400 mb-2">{project.title}</h2>
                            <p className="text-gray-300 mb-4">{project.description}</p>

                            {/* Project specific details */}
                            {project.score !== undefined && (
                                <p className="text-gray-400 mb-2">Score: {project.score}</p>
                            )}
                            {project.phase && (
                                <p className="text-gray-400 mb-2">Phase: {project.phase}</p>
                            )}
                            {project.progress && (
                                <p className="text-gray-400 mb-2">Progress: {project.progress}</p>
                            )}

                            {/* buttons */}
                            <div className="flex gap-4 mt-4">
                                <Link to={`/projects/${project.id}`}
                                    className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                                    Details
                                </Link>
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                                        className="bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                                        Live
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}