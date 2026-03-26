import ProjectDetail from "../../components/ProjectDetail";

export default function KingdomHeartsGuide() {
    const project = {
        title: "Kingdom Hearts Guide Website",
        image: "/src/images/KingdomHeartsGuide.png",
        live: "https://github.com/Shav0nne/kingdom-hearts-guides",
        github: "https://github.com/Shav0nne/kingdom-hearts-guides",
        description: (
            <>
                <p>
                    The Kingdom Hearts Guide Website is a comprehensive resource for players looking to
                    master the complex mechanics of the Kingdom Hearts series. This guide covers everything
                    from basic controls to advanced strategies for boss fights.
                </p>
                <p>
                    The website features detailed guides for Valor Form, detailed boss strategies for
                    challenging encounters like Axel, and information about common Heartless. Each
                    guide is written to be accessible for new players while providing valuable insights
                    for experienced fans.
                </p>
                <p>
                    I created this project to combine my love for the Kingdom Hearts series with my web
                    development skills. The responsive design ensures the guides are readable on any
                    device, making it easy to reference while playing.
                </p>
            </>
        ),
        development: (
            <>
                <p>
                    For this project, I used the Laravel framework to build a web application.
                    Laravel provided an excellent structure for organizing the code, handling routing, and managing
                    the database interactions efficiently.
                </p>
                <p>
                    The backend is built with PHP, utilizing Laravel's elegant syntax and powerful features like
                    Eloquent ORM for database operations. I used SQLite as the database to store all the guide
                    content, user data, and game information.
                </p>
                <p>
                    The frontend was developed using HTML and CSS, with Blade templates for dynamic content
                    rendering. Laravel's Blade templating engine made it easy to create reusable components and
                    maintain a consistent layout throughout the website.
                </p>
                <p>
                    One of the main challenges was organizing the large amount of game data in a user friendly way.
                    I solved this by creating a categorization system with Eloquent relationships and implementing
                    a search feature using Laravel Scout, making it easy for users to find specific information quickly.
                </p>
                <p>
                    The project helped me deepen my understanding of MVC architecture, database relationships,
                    and how to build a complete content management system using Laravel. In the future, I plan to
                    add more game guides and implement user authentication so players can save their favorite guides.
                </p>
            </>
        ),
        techStack: [
            { name: "Laravel", icon: "/src/images/tech/laravel.png" },
            { name: "PHP", icon: "/src/images/tech/php.png" },
            { name: "HTML", icon: "/src/images/tech/html.png" },
            { name: "SQLite", icon: "/src/images/tech/sqlite.png" }
        ],
        tools: [
            { name: "PphStorm", icon: "/src/images/tech/phpstorm.png" },
            { name: "GitHub", icon: "/src/images/tech/github.png" },
            { name: "Git", icon: "/src/images/tech/git.png" },
            { name: "Laravel Herd", icon: "/src/images/tech/herd.png" }
        ],
        additionalImages: [
            {
                src: "/src/images/KhComment.png",
                alt: "Screenshot of user comments section on the guide website",
                caption: "User comments section for guide feedback and discussion"
            }
        ]
    };

    return <ProjectDetail project={project} />;
}