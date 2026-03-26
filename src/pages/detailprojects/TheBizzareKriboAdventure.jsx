import ProjectDetail from "../../components/ProjectDetail";
import { images } from "../../utils/images";

export default function TheBizzareKriboAdventure() {
    const project = {
        title: "The Bizarre Kribo Adventure",
        image: images.projects.kribo.guide,
        live: "https://shav0nne.github.io/The_Bizzare_Kribo_Adventure/",
        github: "https://github.com/Shav0nne/The_Bizzare_Kribo_Adventure",
        description: (
            <>
                <p>
                    The Bizarre Kribo Adventure is a hard platform game where you need to be
                    careful and try again many times. The game starts colorful and fun, but
                    it gets harder as you play. There are traps and surprises that make you
                    think fast.
                </p>
                <p>
                    You play as Kribo and move through levels where every jump is important.
                    If you make a mistake, you have to start over. There are hidden dangers
                    and enemies that you don't expect. The game wants you to keep trying and
                    get better each time.
                </p>
                <p>
                    The game is not just about being hard. It also tells a story about feeling
                    worried and facing problems. As you go further, the world changes and looks
                    strange. The story and gameplay work together to show Kribo's journey into
                    a scary and confusing world.
                </p>
            </>
        ),
        development: (
            <>
                <p>
                    For this project, I used JavaScript and the Excalibur game engine that I learned at school.
                    The engine helped me build the jumping and moving parts of the game. It also made it easier
                    to check when Kribo hits something (like walls or enemies).
                </p>
                <p>
                    I drew all the graphics myself on my phone. This includes Kribo (the main character),
                    the shadow, and the stars. I like drawing in pixel style, so this was a fun way to be creative
                    while making the game. I wanted the game to look how I imagined it.
                </p>
                <p>
                    The idea for the game came from design class. We had to make a guide for our own game.
                    This helped me think about the game in a clear way. I planned how it should work and
                    what the player would do. I also made sure the controls felt good and the game was fair.
                </p>
                <p>
                    In the future, I want to make this game bigger. I already have a story in my head and
                    ideas for new levels. I also want to add more enemies and power-ups to make it more fun.
                    But I need more experience first. I want to learn more about game making before I start
                    adding all these new things.
                </p>
            </>
        ),
        techStack: [
            { name: "JavaScript", icon: images.tech.javascript },
            { name: "Excalibur", icon: images.tech.excalibur }
        ],
        tools: [
            { name: "VS Code", icon: images.tech.vscode },
            { name: "GitHub", icon: images.tech.github },
            { name: "Git", icon: images.tech.git }
        ],
        additionalImages: [
            {
                src: images.projects.kribo.art,
                alt: "Designs for the game character Kribo",
                caption: "Character designs"
            },
            {
                src: images.projects.kribo.screenshot,
                alt: "Screenshot of the game showing the main character Kribo in action",
                caption: "In-game screenshot"
            }
        ]
    };

    return <ProjectDetail project={project} />;
}