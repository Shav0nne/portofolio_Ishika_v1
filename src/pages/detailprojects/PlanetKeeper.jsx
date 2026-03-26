import ProjectDetail from "../../components/ProjectDetail";
import { images } from "../../utils/images";

export default function PlanetKeeper() {
    const project = {
        title: "Planet Keeper",
        image: images.projects.planetKeeper.screenshot,
        live: "https://planet-keeper.itch.io/planet-keeper",
        github: "https://github.com/dingoskye/planetkeeper",
        description: (
            <>
                <p>
                    Planet Keeper is a game about making choices and taking care of the environment.
                    The game was made for a school project called CLE 4. We had to make a game with a
                    challenge that fits the theme "diversity and inclusion". The game is made for players
                    who like to reach goals and take on challenges (we call them "achievers").
                </p>
                <p>
                    In the game, you play as a guardian who protects planets. You face different dilemmas
                    and must make choices that affect your planet. Each choice changes your reputation
                    and resources. The game teaches you about diversity, inclusion, and taking care of
                    our world.
                </p>
                <p>
                    You can play the game with a controller. Move the pointer with the joystick and press
                    buttons to make your choices. The game gives you feedback with colors, sounds, and
                    visual effects.
                </p>
            </>
        ),
        development: (
            <>
                <p>
                    <strong className="text-yellow-400">Team Project</strong> - We made this game together
                    as a team. We split the work fairly and used everyone's strengths. This helped me grow
                    my programming skills and learn new things while helping build the final game.
                </p>

                <p>
                    <strong className="text-yellow-400">The Assignment</strong>
                </p>
                <p>
                    For CLE 4, we had to make a game with a challenge. The game had to fit the theme
                    "diversity and inclusion" and be fun for players who like to reach goals (achievers).
                    Our team chose Thomas's idea: a game with dilemmas called Planet Keeper.
                </p>

                <p>
                    <strong className="text-yellow-400">What I did in this project:</strong>
                </p>

                <p className="mt-3">
                    <span className="text-yellow-400">UI Artwork & Design:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Made a pointer that you can move with the controller</li>
                    <li>Created happy and sad faces that show when your reputation changes</li>
                    <li>Drew gold bars for resources (one bar gives +10, three bars show total resources)</li>
                    <li>Made an event bar where dilemma texts appear</li>
                    <li>Created buttons that change color when you hover over them</li>
                </ul>

                <p>
                    <span className="text-yellow-400">Fonts:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Chose "Audiowide" for titles - it looks futuristic</li>
                    <li>Chose "Orbitron" for normal text - it's clean and easy to read</li>
                    <li>Added these fonts to the project so everyone in the team could use them</li>
                </ul>

                <p>
                    <span className="text-yellow-400">Controller & Pointer:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Made a special pointer that works with Xbox and PlayStation controllers</li>
                    <li>You move the pointer with the joystick and click buttons with 'A' (Xbox) or 'X' (PlayStation)</li>
                    <li>The pointer fits the game style - it stands out but still looks good</li>
                </ul>

                <p>
                    <span className="text-yellow-400">Text & Feedback:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Wrote simple, clear texts for the start screen and game over screen</li>
                    <li>Added pop-ups when your reputation gets too low, explaining why you can't continue</li>
                    <li>Made buttons change color (to yellow) when you point at them, so you know you can click</li>
                    <li>Added sound effects for extra feedback, like clicks and alerts</li>
                </ul>

                <p>
                    <span className="text-yellow-400">My Presentations:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Made a presentation about the game idea with clear and simple language</li>
                    <li>Made sure all texts and visuals fit our players (people who like challenges)</li>
                    <li>Created the end market for the game</li>
                </ul>
                <p>
                    Working on this project taught me how to work in a team, use Git to share code,
                    and make games that give clear feedback to players. I'm proud of the visuals and
                    controller support I added to the game.
                </p>
            </>
        ),
        techStack: [
            { name: "JavaScript", icon: images.tech.javascript },
            { name: "Excalibur", icon: images.tech.excalibur },
            { name: "HTML", icon: images.tech.html },
            { name: "CSS", icon: images.tech.css }
        ],
        tools: [
            { name: "VS Code", icon: images.tech.vscode },
            { name: "GitHub", icon: images.tech.github },
            { name: "Git", icon: images.tech.git },
            { name: "Ibis Paint", icon: images.tech.ibispaint },
        ],
        additionalImages: [
            {
                src: images.projects.planetKeeper.ui,
                alt: "UI visuals - faces, gold bars, buttons",
                caption: "The visuals I drew for the game."
            },
            {
                src: images.projects.planetKeeper.gameplay,
                alt: "Gameplay screenshot showing the pointer and dilemma text",
                caption: "Gameplay screenshot showing the pointer and dilemma text."
            }
        ]
    };

    return <ProjectDetail project={project} />;
}