import { createContext, useContext, useState } from 'react';

// Vertalingen
const translations = {
    en: {
        // Navbar
        navHome: "Home",
        navProjects: "Projects",
        navLearnings: "Learnings",
        navContact: "Contact",

        // Home pagina
        homeWelcome: "Welcome, this is me!",
        homeSubtitle: "I build things because I enjoy turning ideas into something real.",
        homeText1: "I like programming because it feels like solving small puzzles every day. You start with nothing, and step by step you build something that actually works! For me, coding is a mix of logic and creativity. I enjoy thinking about how things should work, but also how they should look and feel.",
        homeText2: "This portfolio is a collection of my projects, experiments, and things I learned along the way. It represents how I grow as a developer.",
        aboutMe: "About Me",
        whoIAm: "Who I am",
        whoIAmText: "My name is Ishika, and I'm currently studying Creative Media & Game Technologies at Rotterdam University of Applied Sciences. I'm someone who enjoys learning by doing and figuring things out step by step. I don't see programming as something you instantly master. For me, it's about improving a little bit every time I work on something.",
        whyProgramming: "Why I started programming",
        whyProgrammingText: "I originally started programming because I want to work in the game industry. The idea of creating games and interactive worlds really interests me. Right now, I mostly work on websites, and I actually enjoy that more than I expected. I like being creative with layouts, colors, and small details. In the future, I'd like to combine creativity and technology, whether that's in games, websites, or something I haven't discovered yet.",
        whatEnjoy: "What I enjoy",
        whatEnjoyText: "Outside of coding, I spend a lot of time on creative and relaxing hobbies. I really enjoy playing video games and watching anime. I also like watching Formula 1 together with my family. Other things I like are building LEGO sets, designing or upgrading house interiors in software or games, and coloring pixel art. I enjoy calm, creative activities where I can focus on details.",
        funFact: "Fun Fact",
        funFactText: "Persona 4 Golden is my all time favorite game! The characters, story, and the whole aesthetic of Inaba have inspired my portfolio design. This game meant a lot to me and it describes me as a person aswell",
        connect: "Connect with me",

        // Projects pagina
        projectsTitle: "Projects",
        projectsSubtitle: "My projects!",
        details: "Details",
        live: "Live",

        // Learnings pagina
        learningsTitle: "What have I learned",
        learningsSubtitle: "My journey through technology and development",
        technicalSkills: "Technical Skills",
        softSkills: "Soft Skills & Qualities",
        learningGoals: "My Learning Goals",

        // Contact pagina
        contactTitle: "Let's Connect!",
        contactText: "Have a question, a project idea, or just want to say hi? I'd love to hear from you! Feel free to reach out through any of the platforms below.",
        linkedin: "Connect professionally",
        github: "Check out my code",
        email: "Send me a message",
        downloadCV: "Download My CV",
        downloadText: "Interested in working together? Download my CV to learn more about my experience, skills, and background. I'm always open to new opportunities and collaborations!",
        downloadNL: "Download CV (NL)",
        downloadEN: "Download CV (EN)",
        respondTime: "Usually respond within 24 hours",

        // Footer
        copyright: "All rights reserved.",
        inspired: "Inspired by Persona 4 Golden",
    },
    nl: {
        // Navbar
        navHome: "Home",
        navProjects: "Projecten",
        navLearnings: "Leerpunten",
        navContact: "Contact",

        // Home pagina
        homeWelcome: "Welkom, dit ben ik!",
        homeSubtitle: "Ik bouw dingen omdat ik het leuk vind om ideeën om te zetten naar iets echts.",
        homeText1: "Ik vind programmeren leuk omdat het voelt als het oplossen van kleine puzzels elke dag. Je begint met niets, en stap voor stap bouw je iets dat echt werkt! Voor mij is coderen een mix van logica en creativiteit. Ik denk graag na over hoe dingen zouden moeten werken, maar ook hoe ze eruit zouden moeten zien en aanvoelen.",
        homeText2: "Deze portfolio is een verzameling van mijn projecten, experimenten en dingen die ik onderweg heb geleerd. Het laat zien hoe ik groei als developer.",
        aboutMe: "Over Mij",
        whoIAm: "Wie ik ben",
        whoIAmText: "Mijn naam is Ishika en ik studeer Creative Media & Game Technologies aan de Rotterdam University of Applied Sciences. Ik ben iemand die leert door te doen en stap voor stap dingen uitzoekt. Ik zie programmeren niet als iets dat je in een keer onder de knie hebt. Voor mij gaat het erom elke keer een beetje beter te worden.",
        whyProgramming: "Waarom ik ben gaan programmeren",
        whyProgrammingText: "Ik ben oorspronkelijk gaan programmeren omdat ik in de game-industrie wil werken. Het idee om games en interactieve werelden te maken interesseert me enorm. Op dit moment werk ik vooral aan websites, en dat vind ik eigenlijk leuker dan ik verwachtte. Ik vind het leuk om creatief te zijn met lay-outs, kleuren en kleine details. In de toekomst wil ik graag creativiteit en technologie combineren, of dat nu in games, websites of iets anders is.",
        whatEnjoy: "Wat ik leuk vind",
        whatEnjoyText: "Naast coderen besteed ik veel tijd aan creatieve en ontspannende hobby's. Ik vind het erg leuk om videogames te spelen en anime te kijken. Ook kijk ik graag naar Formule 1 samen met mijn familie. Andere dingen die ik leuk vind zijn het bouwen van LEGO sets, het ontwerpen van interieurs in software of games, en het inkleuren van pixel art. Ik hou van rustige, creatieve activiteiten waar ik me op details kan focussen.",
        funFact: "Leuk weetje",
        funFactText: "Persona 4 Golden is mijn favoriete game aller tijden! De personages, het verhaal en de hele sfeer van Inaba hebben mijn portfolio design geïnspireerd. Deze game betekent veel voor mij en beschrijft mij ook als persoon.",
        connect: "Neem contact met mij op",

        // Projects pagina
        projectsTitle: "Projecten",
        projectsSubtitle: "Mijn projecten!",
        details: "Details",
        live: "Live",

        // Learnings pagina
        learningsTitle: "Wat heb ik geleerd",
        learningsSubtitle: "Mijn reis door technologie en ontwikkeling",
        technicalSkills: "Technische Vaardigheden",
        softSkills: "Zachte Vaardigheden & Kwaliteiten",
        learningGoals: "Mijn Leerdoelen",

        // Contact pagina
        contactTitle: "Laten we verbinden!",
        contactText: "Heb je een vraag, een projectidee of wil je gewoon hallo zeggen? Ik hoor het graag! Neem gerust contact met mij op via een van de onderstaande platformen.",
        linkedin: "Professioneel verbinden",
        github: "Bekijk mijn code",
        email: "Stuur me een bericht",
        downloadCV: "Download Mijn CV",
        downloadText: "Interesse om samen te werken? Download mijn CV om meer te weten te komen over mijn ervaring, vaardigheden en achtergrond. Ik sta altijd open voor nieuwe kansen en samenwerkingen!",
        downloadNL: "Download CV (NL)",
        downloadEN: "Download CV (ENG)",
        respondTime: "Reageer meestal binnen 24 uur",

        // Footer
        copyright: "Alle rechten voorbehouden.",
        inspired: "Geïnspireerd door Persona 4 Golden",
    }
};

const LanguageContext = createContext();

export function useLanguage() {
    return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'nl' : 'en');
    };

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}