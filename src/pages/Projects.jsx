import { Link } from "react-router-dom";
import { images } from "../utils/images";
import { FadeInSection, FadeInScale } from "../components/Animations";
import { useLanguage } from '../context/Language';

export default function Projects() {
    const { language, t } = useLanguage();

    const projects = [
        {
            id: "the-bizarre-kribo-adventure",
            title: "The Bizarre Kribo Adventure",
            descriptionEn: "A hard platform game where you need to be careful and keep trying. Every jump matters!",
            descriptionNl: "Een moeilijk platformspel waar je voorzichtig moet zijn en steeds opnieuw moet proberen. Elke sprong is belangrijk!",
            image: images.projects.kribo.screenshot,
            live: "https://shav0nne.github.io/The_Bizzare_Kribo_Adventure/"
        },
        {
            id: "planet-keeper",
            title: "Planet Keeper",
            descriptionEn: "A team project about taking care of the environment. Make choices that help your planet.",
            descriptionNl: "Een teamproject over het zorgen voor het milieu. Maak keuzes die je planeet helpen.",
            image: images.projects.planetKeeper.screenshot,
            live: "https://planet-keeper.itch.io/planet-keeper"
        },
        {
            id: "poppy",
            title: "Poppy",
            descriptionEn: "A music app with AI that recommends songs. Made with Express.js and MongoDB.",
            descriptionNl: "Een muziekapp met AI die nummers aanbeveelt. Gemaakt met Express.js en MongoDB.",
            image: images.projects.poppy.main,
            live: "http://145.24.237.244"
        },
        {
            id: "trippie",
            title: "Trippie",
            descriptionEn: "A travel app that helps people use public transport. Made for people who need extra help.",
            descriptionNl: "Een reisapp die mensen helpt met het openbaar vervoer. Gemaakt voor mensen die extra hulp nodig hebben.",
            image: images.projects.trippie.main,
            live: "https://project.cmi.hr.nl/2024_2025/cle3_t10/trippie/"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <FadeInSection delay={100}>
                <h1 className="text-4xl font-bold text-yellow-400 mb-4">{t('projectsTitle')}</h1>
                <p className="text-gray-300 mb-12 text-lg">{t('projectsSubtitle')}</p>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <FadeInScale key={project.id} delay={200 + (index * 100)}>
                        <div className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                            {/* Project Image */}
                            <div className="h-48 bg-gray-700 relative">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover"
                                     onError={(e) => {
                                         e.target.src = "/";}}/>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-yellow-400 mb-2">{project.title}</h2>
                                <p className="text-gray-300 mb-4">
                                    {language === 'en' ? project.descriptionEn : project.descriptionNl}
                                </p>

                                {/* buttons */}
                                <div className="flex gap-4 mt-4">
                                    <Link to={`/projects/${project.id}`}
                                          className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                                        {t('details')}
                                    </Link>
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                                           className="bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                                            {t('live')}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </FadeInScale>
                ))}
            </div>
        </div>
    );
}