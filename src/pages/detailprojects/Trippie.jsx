import ProjectDetail from "../../components/ProjectDetail";
import { images } from "../../utils/images";

export default function Trippie() {
    const project = {
        title: "Trippie",
        image: images.projects.trippie.main,
        live: "https://project.cmi.hr.nl/2024_2025/cle3_t10/trippie/",
        github: "https://github.com/Chrisieee/trippie",

        descriptionEn: (
            <>
                <p>
                    Trippie is a travel app that helps people with a light intellectual disability use
                    public transport. The app makes it easier to plan trips, find stations, and see the route.
                </p>
                <p>
                    For this school project, we had to make public transport accessible for people who need
                    extra help. The app uses simple language, big buttons, and clear steps. Everything is
                    designed to be easy to understand.
                </p>
                <p>
                    The app helps users plan their trip step by step. You can type where you want to go,
                    choose a time, and see the route on a map. The app gives clear feedback so you know
                    what to do next.
                </p>
            </>
        ),

        descriptionNl: (
            <>
                <p>
                    Trippie is een reisapp die mensen met een lichte verstandelijke beperking helpt om
                    het openbaar vervoer te gebruiken. De app maakt het makkelijker om reizen te plannen,
                    stations te vinden en de route te zien.
                </p>
                <p>
                    Voor dit schoolproject moesten we het openbaar vervoer toegankelijk maken voor mensen die
                    extra hulp nodig hebben. De app gebruikt eenvoudige taal, grote knoppen en duidelijke stappen.
                    Alles is ontworpen om makkelijk te begrijpen te zijn.
                </p>
                <p>
                    De app helpt gebruikers stap voor stap hun reis te plannen. Je kunt typen waar je naartoe wilt,
                    een tijd kiezen en de route op een kaart zien. De app geeft duidelijke feedback zodat je weet
                    wat je vervolgens moet doen.
                </p>
            </>
        ),

        developmentEn: (
            <>
                <p>
                    <strong className="text-yellow-400">Team Project</strong> - We worked together as a team
                    for this project. Our goal was to make public transport easier for people with a light
                    intellectual disability.
                </p>
                <p>
                    <strong className="text-yellow-400">The Users (Target Group):</strong>
                </p>
                <p>
                    Our app is made for people with a light intellectual disability. This means we had to
                    use simple words, clear pictures, and easy steps.
                </p>
                <p>
                    <strong className="text-yellow-400">What I did in this project:</strong>
                </p>
                <p className="mt-3">
                    <span className="text-yellow-400">Home Page:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Made a progress bar so users can see how far they are in planning their trip</li>
                    <li>Made big input fields that are easy to read</li>
                    <li>Added "Next" and "Back" buttons to help users move through the steps</li>
                    <li>Added validation in HTML and JavaScript</li>
                </ul>
                <p>
                    <span className="text-yellow-400">Map & Location:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Put the Google Maps map at the bottom so it's easy to see</li>
                    <li>The route is shown clearly on the map</li>
                    <li>Added zoom in and zoom out buttons</li>
                </ul>
                <p>
                    <span className="text-yellow-400">AutoComplete Function:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>When you type a station name, the letters become bold</li>
                    <li>Simple and clear text for all questions</li>
                    <li>Big font size so everything is easy to read</li>
                </ul>
                <p>
                    <span className="text-yellow-400">Help Videos:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Made three videos that explain how the app works</li>
                    <li>Used simple language and slow, calm explanations</li>
                </ul>
                <p>
                    <strong className="text-yellow-400">Testing with Users:</strong>
                </p>
                <p className="mt-2">
                    <span className="text-yellow-400">First test (March 31, 2025):</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>She did not know you could scroll down to see more times</li>
                    <li>She did not understand the icons that show how busy it is</li>
                </ul>
                <p>
                    <span className="text-yellow-400">Second test (April 7, 2025):</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>She said the app was clear and easy to use</li>
                    <li>Now she understood the busy icons</li>
                    <li>She knew she could scroll down to see more options</li>
                </ul>
                <p>
                    <strong className="text-yellow-400">What I learned:</strong>
                </p>
                <p>
                    This project taught me how to make things for people who need extra help. I learned
                    that simple words and clear design make a big difference.
                </p>
            </>
        ),

        developmentNl: (
            <>
                <p>
                    <strong className="text-yellow-400">Teamproject</strong> - We werkten samen als team
                    aan dit project. Ons doel was om het openbaar vervoer makkelijker te maken voor mensen met een
                    lichte verstandelijke beperking.
                </p>
                <p>
                    <strong className="text-yellow-400">De Gebruikers (Doelgroep):</strong>
                </p>
                <p>
                    Onze app is gemaakt voor mensen met een lichte verstandelijke beperking. Dit betekent dat we
                    eenvoudige woorden, duidelijke plaatjes en makkelijke stappen moesten gebruiken.
                </p>
                <p>
                    <strong className="text-yellow-400">Wat ik deed in dit project:</strong>
                </p>
                <p className="mt-3">
                    <span className="text-yellow-400">Home Pagina:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Maakte een voortgangsbalk zodat gebruikers kunnen zien hoe ver ze zijn met het plannen van hun reis</li>
                    <li>Maakte grote invoervelden die makkelijk te lezen zijn</li>
                    <li>Voegde "Volgende" en "Vorige" knoppen toe</li>
                    <li>Voegde validatie toe in HTML en JavaScript</li>
                </ul>
                <p>
                    <span className="text-yellow-400">Kaart & Locatie:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Plaatste de Google Maps kaart onderaan zodat het makkelijk te zien is</li>
                    <li>De route wordt duidelijk getoond op de kaart</li>
                    <li>Voegde in- en uitzoomknoppen toe</li>
                </ul>
                <p>
                    <span className="text-yellow-400">AutoComplete Functie:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Wanneer je een stationsnaam typt, worden de letters dikgedrukt</li>
                    <li>Eenvoudige en duidelijke tekst voor alle vragen</li>
                    <li>Groot lettertype zodat alles makkelijk te lezen is</li>
                </ul>
                <p>
                    <span className="text-yellow-400">Hulp Video's:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Maakte drie video's die uitleggen hoe de app werkt</li>
                    <li>Gebruikte eenvoudige taal en rustige uitleg</li>
                </ul>
                <p>
                    <strong className="text-yellow-400">Testen met Gebruikers:</strong>
                </p>
                <p className="mt-2">
                    <span className="text-yellow-400">Eerste test (31 maart 2025):</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Ze wist niet dat je naar beneden kon scrollen om meer tijden te zien</li>
                    <li>Ze begreep de pictogrammen niet die laten zien hoe druk het is</li>
                </ul>
                <p>
                    <span className="text-yellow-400">Tweede test (7 april 2025):</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Ze zei dat de app duidelijk en makkelijk te gebruiken was</li>
                    <li>Nu begreep ze de drukte pictogrammen wel</li>
                    <li>Ze wist dat ze naar beneden kon scrollen om meer opties te zien</li>
                </ul>
                <p>
                    <strong className="text-yellow-400">Wat ik leerde:</strong>
                </p>
                <p>
                    Dit project leerde me hoe ik dingen moet maken voor mensen die extra hulp nodig hebben. Ik leerde
                    dat eenvoudige woorden en duidelijk ontwerp een groot verschil maken.
                </p>
            </>
        ),

        techStack: [
            { name: "HTML", icon: images.tech.html },
            { name: "CSS", icon: images.tech.css },
            { name: "JavaScript", icon: images.tech.javascript },
            { name: "Google Maps API", icon: images.tech.googlemaps }
        ],
        tools: [
            { name: "VS Code", icon: images.tech.vscode },
            { name: "GitHub", icon: images.tech.github },
            { name: "Git", icon: images.tech.git },
            { name: "Figma", icon: images.tech.figma }
        ],
        additionalImages: [
            {
                src: images.projects.trippie.view,
                alt: "A page of all the trips",
                caption: "The page where you can see all your planned trips"
            },
            {
                src: images.projects.trippie.validation,
                alt: "Validation message when field is empty",
                caption: "The app shows a message when you forget to fill something in"
            },
            {
                src: images.projects.trippie.map,
                alt: "Google Maps with route",
                caption: "The route map with zoom buttons"
            },
            {
                src: images.projects.trippie.autocomplete,
                alt: "AutoComplete function with bold letters",
                caption: "AutoComplete makes the letters bold when you type"
            }
        ]
    };

    return <ProjectDetail project={project} />;
}