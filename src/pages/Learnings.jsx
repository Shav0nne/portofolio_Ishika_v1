import { FadeInSection, FadeInLeft, FadeInRight, FadeInScale } from "../components/Animations";
import { images } from '../utils/images';
import { useLanguage } from '../context/Language';

export default function Learnings() {
    const { language, t } = useLanguage();

    const skills = [
        {
            name: "HTML & CSS",
            descriptionEn: "Responsive layout and modern web design",
            descriptionNl: "Responsieve layout en modern webdesign",
            icon: images.tech.html,
            levelEn: "Advanced",
            levelNl: "Gevorderd"
        },
        {
            name: "PHP",
            descriptionEn: "Backend development basics",
            descriptionNl: "Basis backend ontwikkeling",
            icon: images.tech.php,
            levelEn: "Intermediate",
            levelNl: "Gemiddeld"
        },
        {
            name: "Laravel / Herd",
            descriptionEn: "Framework structure and backend architecture",
            descriptionNl: "Framework structuur en backend architectuur",
            icon: images.tech.laravel,
            levelEn: "Intermediate",
            levelNl: "Gemiddeld"
        },
        {
            name: "JavaScript",
            descriptionEn: "Building interactive web applications",
            descriptionNl: "Bouwen van interactieve webapplicaties",
            icon: images.tech.javascript,
            levelEn: "Growing",
            levelNl: "Groeien"
        },
        {
            name: "Game Development",
            descriptionEn: "Excalibur engine and game mechanics",
            descriptionNl: "Excalibur engine en spelmechanieken",
            icon: images.tech.excalibur,
            levelEn: "Beginner",
            levelNl: "Beginner"
        },
        {
            name: "UI/UX Design",
            descriptionEn: "Wireframing and prototyping in Figma",
            descriptionNl: "Wireframing en prototypen in Figma",
            icon: images.tech.figma,
            levelEn: "Intermediate",
            levelNl: "Gemiddeld"
        },
        {
            name: "Web & Graphic Design",
            descriptionEn: "Creating visuals with Canva",
            descriptionNl: "Visuele ontwerpen maken met Canva",
            icon: images.tech.canva,
            levelEn: "Intermediate",
            levelNl: "Gemiddeld"
        },
        {
            name: "Git & GitHub",
            descriptionEn: "Version control and collaboration",
            descriptionNl: "Versiebeheer en samenwerking",
            icon: images.tech.git,
            levelEn: "Intermediate",
            levelNl: "Gemiddeld"
        }
    ];

    const softSkillsEn = [
        "Creative thinking and solution thinker",
        "Can work in a team or alone",
        "Friendly, helpful and open to learn more",
        "Good at making plans",
        "Always on time and present",
        "Has a driver's license B"
    ];

    const softSkillsNl = [
        "Creatief denker en probleemoplosser",
        "Kan in team of alleen werken",
        "Vriendelijk, behulpzaam en sta open om te leren",
        "Goed in het maken van plannen",
        "Altijd op tijd en aanwezig",
        "Heeft rijbewijs B"
    ];

    const learningGoalsEn = [
        {
            title: "Master react and modern javascript",
            description: "Deepen my knowledge of React hooks, state management, and modern JavaScript features to build more complex and interactive applications"
        },
        {
            title: "Improve game development skills (with other engines)",
            description: "Create a complete game using Unity or Godot, expanding beyond web based game engines and learning professional game development workflows"
        },
        {
            title: "Build a full-stack application",
            description: "Create a complete project using Laravel backend with React frontend to understand full-stack development and API integration"
        },
        {
            title: "Contribute to open source",
            description: "Start contributing to open-source projects to learn from experienced developers and give back to the community"
        }
    ];

    const learningGoalsNl = [
        {
            title: "React en moderne JavaScript onder de knie krijgen",
            description: "Mijn kennis verdiepen van React hooks, state management en moderne JavaScript functies om complexere en interactievere applicaties te bouwen"
        },
        {
            title: "Game development vaardigheden verbeteren (met andere engines)",
            description: "Een complete game maken met Unity of Godot, verder gaan dan web-gebaseerde game engines en professionele game development workflows leren"
        },
        {
            title: "Een full-stack applicatie bouwen",
            description: "Een compleet project maken met Laravel backend en React frontend om full-stack ontwikkeling en API integratie te begrijpen"
        },
        {
            title: "Bijdragen aan open source",
            description: "Beginnen met bijdragen aan open-source projecten om te leren van ervaren developers en iets terug te geven aan de community"
        }
    ];

    const getLevelText = (levelEn, levelNl) => {
        return language === 'en' ? levelEn : levelNl;
    };

    const getLevelColor = (level) => {
        const levelEn = typeof level === 'object' ? level.en : level;
        switch(levelEn) {
            case 'Advanced': return 'bg-green-900 text-green-300';
            case 'Proficient': return 'bg-blue-900 text-blue-300';
            case 'Intermediate': return 'bg-yellow-900 text-yellow-300';
            case 'Growing': return 'bg-purple-900 text-purple-300';
            default: return 'bg-gray-700 text-gray-300';
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <FadeInSection delay={100}>
                <h1 className="text-4xl font-bold text-yellow-400 mb-4">{t('learningsTitle')}</h1>
                <p className="text-gray-300 mb-12 text-lg">{t('learningsSubtitle')}</p>
            </FadeInSection>

            {/* Technical skills grid */}
            <div className="mb-16">
                <FadeInLeft delay={200}>
                    <h2 className="text-2xl font-bold text-yellow-400 mb-6">{t('technicalSkills')}</h2>
                </FadeInLeft>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <FadeInScale key={index} delay={300 + (index * 50)}>
                            <div className="bg-gray-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                                <div className="flex justify-center mb-4">
                                    <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                                        <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain"
                                             onError={(e) => {
                                                 e.target.src = "https://via.placeholder.com/48?text=Logo";}}/>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-yellow-400 text-center mb-2">{skill.name}</h3>
                                <p className="text-gray-400 text-sm text-center mb-2">
                                    {language === 'en' ? skill.descriptionEn : skill.descriptionNl}
                                </p>
                                <div className="mt-3 text-center">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.levelEn)}`}>
                                        {getLevelText(skill.levelEn, skill.levelNl)}
                                    </span>
                                </div>
                            </div>
                        </FadeInScale>
                    ))}
                </div>
            </div>

            {/* Soft skills */}
            <div className="mb-16">
                <FadeInRight delay={400}>
                    <h2 className="text-2xl font-bold text-yellow-400 mb-6">{t('softSkills')}</h2>
                </FadeInRight>
                <FadeInScale delay={500}>
                    <div className="bg-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {(language === 'en' ? softSkillsEn : softSkillsNl).map((skill, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <span className="text-yellow-400 text-lg">✓</span>
                                    <span className="text-gray-300">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeInScale>
            </div>

            {/* Personal learning goals */}
            <div>
                <FadeInLeft delay={600}>
                    <h2 className="text-2xl font-bold text-yellow-400 mb-6">{t('learningGoals')}</h2>
                </FadeInLeft>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {(language === 'en' ? learningGoalsEn : learningGoalsNl).map((goal, index) => (
                        <FadeInScale key={index} delay={700 + (index * 100)}>
                            <div className="bg-gray-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                                <h3 className="text-xl font-semibold text-yellow-400 mb-3">{goal.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{goal.description}</p>
                            </div>
                        </FadeInScale>
                    ))}
                </div>
            </div>
        </div>
    );
}