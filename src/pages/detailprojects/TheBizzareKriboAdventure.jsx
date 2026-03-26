import ProjectDetail from "../../components/ProjectDetail";

export default function TheBizzareKriboAdventure() {
    const project = {
        title: "Game - The Bizarre Kribo Adventure",
        image: "/src/images/TheBizzareKriboAdventureGuide.png",
        live: "https://shav0nne.github.io/The_Bizzare_Kribo_Adventure/",
        github: "https://github.com/Shav0nne/The_Bizzare_Kribo_Adventure",
        description: (
            <>
                <p>
                    The Bizarre Kribo Adventure is a chaotic rage platformer where precision,
                    patience, and persistence are constantly put to the test. What starts as a
                    colorful and playful journey quickly turns into a psychological challenge
                    filled with unpredictable hazards and unforgiving mechanics.
                </p>
                <p>
                    Players control Kribo through increasingly hostile environments where every
                    jump matters and every mistake is punished. From hidden dangers to enemies
                    that defy expectations, the game is designed to keep players on edge and
                    push them to adapt, retry, and overcome.
                </p>
                <p>
                    Beyond its difficulty, the game explores themes of anxiety, illusion, and
                    inner struggle. As players progress, the world becomes more distorted,
                    blending gameplay with narrative elements that reflect Kribo’s descent into
                    a cursed and unsettling reality.
                </p>
            </>
        ),
        development: (
            <>
                <p>
                    For this project, I used JavaScript and the Excalibur game engine that i learned from school.
                    The engine provided a solid foundation for developing platform mechanics and handling collision detection.
                </p>
                <p>
                    The graphics, including Kribo, the shadow, and the stars, were designed and drawn by me on my phone.
                    This gave me the freedom to match the visual style perfectly with the atmosphere I wanted to create.
                    Plus, i also love drawing in pixel style, so it was a fun way to express my creativity while working on the game.
                </p>
                <p>
                    The concept originated during design classes, where we had to create a guide for our own game.
                    This process helped me approach the design in a structured way and properly work out the mechanics.
                </p>
                <p>
                    In the future, I would love to expand this concept further. I've already thought out a storyline
                    and have ideas for how the levels should look. I also want to add more variety in enemies and power-ups.
                    But that's for later, when I have gained more experience in game development.
                </p>
            </>
        ),
        techStack: [
            { name: "JavaScript", icon: "/src/images/tech/javascript.png" },
            { name: "Excalibur", icon: "/src/images/tech/excalibur.png" }
        ],
        tools: [
            { name: "VS Code", icon: "/src/images/tech/vscode.png" },
            { name: "GitHub", icon: "/src/images/tech/github.png" },
            { name: "Git", icon: "/src/images/tech/git.png" }
        ],
        additionalImages: [
            {
                src: "/src/images/KriboArtDesign.jpeg",
                alt: "Designs for the game character Kribo",
                caption: "Character designs"
            },
            {
                src: "/src/images/ScreenshotKriboGame.png",
                alt: "Screenshot of the game showing the main character Kribo in action",
                caption: "In-game screenshot"
            }
        ]
    };

    return <ProjectDetail project={project} />;
}