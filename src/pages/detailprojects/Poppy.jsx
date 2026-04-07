import ProjectDetail from "../../components/ProjectDetail";
import { images } from "../../utils/images";

export default function Poppy() {
    const project = {
        title: "Poppy",
        image: images.projects.poppy.main,
        live: "http://145.24.237.244",
        github: "https://github.com/Shav0nne/sonarpoppy",

        descriptionEn: (
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

        descriptionNl: (
            <>
                <p>
                    Poppy is een muziekapp die AI gebruikt om nummers aan te bevelen aan gebruikers. Het project gaat over
                    het duidelijk en eerlijk maken van AI-aanbevelingen. We wilden gebruikers laten zien waarom bepaalde muziek
                    aan hen wordt aanbevolen.
                </p>
                <p>
                    Dit was een schoolproject waarbij we werkten aan case 2: "Transparante AI in Muziek
                    Aanbevelingen". We keken naar hoe aanbevelingssystemen werken, welke rol AI speelt,
                    en hoe gebruikers kunnen begrijpen waarom ze bepaalde muzieksuggesties krijgen.
                </p>
                <p>
                    Ons team (Team 1A) werkte samen om deze app te bouwen. We onderzochten verschillende muziek
                    API's zoals Deezer en LastFM om muziekgegevens te krijgen voor onze aanbevelingen.
                </p>
            </>
        ),

        developmentEn: (
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
                    We worked hard but could not finish everything. We did finish the most important
                    features for the app to work.
                </p>
                <p>
                    This project taught me a lot about working in a bigger team, using MongoDB,
                    and building back-end features for a real app.
                </p>
            </>
        ),

        developmentNl: (
            <>
                <p>
                    <strong className="text-yellow-400">Teamproject</strong> - Team 1A werkte samen aan dit project.
                    We focusten op het maken van AI-muziek aanbevelingen die gebruikers kunnen begrijpen en vertrouwen.
                </p>
                <p>
                    <strong className="text-yellow-400">Wat ik deed in dit project (Back-end):</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Werkte aan gebruikersprofiel CRUD functies (Aanmaken, Lezen, Bijwerken, Verwijderen)</li>
                    <li>Maakte vrienden functies: vriendschapsverzoeken sturen, accepteren, weigeren en gebruikers blokkeren</li>
                    <li>Hielp met het bekijken van andere gebruikersprofielen</li>
                    <li>Hielp met het ontwerpen van de database met een ERD diagram</li>
                    <li>Werkte aan het vrienden algoritme (helaas niet afgekomen door tijdgebrek)</li>
                </ul>
                <p>
                    <strong className="text-yellow-400">De Project Setup:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Gebruikte MongoDB voor de database</li>
                    <li>Gebruikte Express.js voor het back-end framework</li>
                    <li>Bekeek Deezer en LastFM API's voor muziekdata</li>
                    <li>Maakte een ERD diagram om de databasestructuur te plannen</li>
                </ul>
                <p>
                    <strong className="text-yellow-400">Wat we bouwden:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Gebruikersprofielen die je kunt aanmaken en bewerken</li>
                    <li>Vriendensysteem zodat gebruikers met elkaar kunnen verbinden</li>
                    <li>AI-model voor muziekaanbevelingen</li>
                    <li>Dashboards voor curatoren om het AI-algoritme te wijzigen</li>
                    <li>30-seconden muziek previews voor nummers</li>
                    <li>Admin dashboard om gebruikers te beheren</li>
                </ul>
                <p>
                    <strong className="text-yellow-400">Uitdagingen:</strong>
                </p>
                <p>
                    De grootste uitdaging was tijd. We hadden 2 weken om 17 user stories af te maken.
                    We werkten hard maar konden niet alles afmaken. We hebben wel de belangrijkste
                    functies afgemaakt zodat de app werkt.
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