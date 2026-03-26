import ProjectDetail from "../../components/ProjectDetail";
import { images } from "../../utils/images";

export default function KingdomHeartsGuide() {
    const project = {
        title: "Kingdom Hearts Guide Website",
        image: images.projects.kingdomHearts.guide,
        live: "https://github.com/Shav0nne/kingdom-hearts-guides",
        github: "https://github.com/Shav0nne/kingdom-hearts-guides",
        description: (
            <>
                <p>
                    The Kingdom Hearts Guide Website helps players learn how to play the Kingdom Hearts games.
                    It shows you the basics and gives tips for harder parts of the game.
                </p>
                <p>
                    The website has guides for Valor Form (a special power), tips for fighting tough bosses
                    like Axel, and information about common enemies called Heartless. Everything is written
                    in a way that is easy to understand for new players.
                </p>
                <p>
                    I made this project because I love Kingdom Hearts and wanted to practice my web building
                    skills. The website works on phones, tablets, and computers, so you can check it while
                    you play.
                </p>
            </>
        ),
        development: (
            <>
                <p>
                    For this project, I used Laravel to build the website. Laravel helped me organize my code
                    and connect to the database.
                </p>
                <p>
                    The back-end (the part that stores data) is made with PHP. I used SQLite to store all the
                    guide information in a database.
                </p>
                <p>
                    The front-end (what you see on the screen) is made with HTML and CSS. I used Blade templates
                    (a Laravel tool) to put the guide content on the pages.
                </p>
                <p>
                    The hardest part was putting all the game information in a way that is easy for users to find.
                    I fixed this by making categories for different topics. I also added a search bar so users
                    can quickly find what they need.
                </p>
                <p>
                    This project helped me learn more about how websites are built, how databases work, and how to
                    organize information. In the future, I want to add more game guides and let users make accounts
                    so they can save their favorite guides.
                </p>
            </>
        ),
        techStack: [
            { name: "Laravel", icon: images.tech.laravel },
            { name: "PHP", icon: images.tech.php },
            { name: "HTML", icon: images.tech.html },
            { name: "SQLite", icon: images.tech.sqlite }
        ],
        tools: [
            { name: "VS Code", icon: images.tech.vscode },
            { name: "GitHub", icon: images.tech.github },
            { name: "Git", icon: images.tech.git },
            { name: "Laravel Herd", icon: images.tech.herd }
        ],
        additionalImages: [
            {
                src: images.projects.kingdomHearts.comment,
                alt: "Screenshot of user comments section on the guide website",
                caption: "User comments section for guide feedback and discussion"
            }
        ]
    };

    return <ProjectDetail project={project} />;
}