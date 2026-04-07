import ProjectDetail from "../../components/ProjectDetail";
import { images } from "../../utils/images";

export default function TheBizzareKriboAdventure() {
    const project = {
        title: "The Bizarre Kribo Adventure",
        image: images.projects.kribo.guide,
        live: "https://shav0nne.github.io/The_Bizzare_Kribo_Adventure/",
        github: "https://github.com/Shav0nne/The_Bizzare_Kribo_Adventure",

        // Engelse beschrijving
        descriptionEn: (
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

        // Nederlandse beschrijving
        descriptionNl: (
            <>
                <p>
                    The Bizarre Kribo Adventure is een moeilijk platformspel waar je voorzichtig
                    moet zijn en vaak opnieuw moet proberen. Het spel begint kleurrijk en leuk,
                    maar wordt moeilijker naarmate je verder komt. Er zijn vallen en verrassingen
                    waardoor je snel moet denken.
                </p>
                <p>
                    Je speelt als Kribo en beweegt door levels waar elke sprong belangrijk is.
                    Als je een fout maakt, moet je opnieuw beginnen. Er zijn verborgen gevaren
                    en vijanden die je niet verwacht. Het spel wil dat je blijft proberen en
                    elke keer beter wordt.
                </p>
                <p>
                    Het spel gaat niet alleen over moeilijk zijn. Het vertelt ook een verhaal
                    over je zorgen maken en problemen onder ogen zien. Hoe verder je komt,
                    hoe vreemder de wereld wordt. Het verhaal en de gameplay werken samen om
                    Kribo's reis naar een enge en verwarrende wereld te laten zien.
                </p>
            </>
        ),

        // Engelse development tekst
        developmentEn: (
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

        // Nederlandse development tekst
        developmentNl: (
            <>
                <p>
                    Voor dit project heb ik JavaScript en de Excalibur game engine gebruikt die ik op school heb geleerd.
                    De engine hielp me met het bouwen van de spring- en beweegonderdelen van het spel. Het maakte het ook
                    makkelijker om te controleren wanneer Kribo iets raakt (zoals muren of vijanden).
                </p>
                <p>
                    Ik heb alle graphics zelf getekend op mijn telefoon. Dit omvat Kribo (het hoofdpersonage),
                    de schaduw en de sterren. Ik vind het leuk om in pixelstijl te tekenen, dus dit was een leuke
                    manier om creatief te zijn terwijl ik het spel maakte. Ik wilde dat het spel eruit zou zien zoals ik het voor me zag.
                </p>
                <p>
                    Het idee voor het spel kwam uit de ontwerpklas. We moesten een gids maken voor ons eigen spel.
                    Dit hielp me om op een duidelijke manier over het spel na te denken. Ik plande hoe het moest werken
                    en wat de speler zou doen. Ik zorgde er ook voor dat de bediening goed aanvoelde en dat het spel eerlijk was.
                </p>
                <p>
                    In de toekomst wil ik dit spel groter maken. Ik heb al een verhaal in mijn hoofd en ideeën
                    voor nieuwe levels. Ik wil ook meer vijanden en power-ups toevoegen om het leuker te maken.
                    Maar ik heb eerst meer ervaring nodig. Ik wil meer leren over het maken van games voordat ik
                    al deze nieuwe dingen ga toevoegen.
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