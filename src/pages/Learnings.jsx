import { FadeInSection, FadeInLeft, FadeInRight, FadeInScale } from "../components/Animations";

export default function Learnings() {
    const skills = [
        {
            name: "HTML & CSS",
            description: "Responsive layout and modern web design",
            icon: "/src/images/tech/html-css.png",
            level: "Advanced"
        },
        {
            name: "PHP",
            description: "Backend development basics",
            icon: "/src/images/tech/php.png",
            level: "Intermediate"
        },
        {
            name: "Laravel / Herd",
            description: "Framework structure and backend architecture",
            icon: "/src/images/tech/laravel.png",
            level: "Intermediate"
        },
        {
            name: "JavaScript",
            description: "Building interactive web applications",
            icon: "/src/images/tech/javascript.png",
            level: "Growing"
        },
        {
            name: "Game Development",
            description: "Excalibur engine and game mechanics",
            icon: "/src/images/tech/excalibur.png",
            level: "Beginner"
        },
        {
            name: "UI/UX Design",
            description: "Wireframing and prototyping in Figma",
            icon: "/src/images/tech/figma.png",
            level: "Intermediate"
        },
        {
            name: "Web & Graphic Design",
            description: "Creating visuals with Canva",
            icon: "/src/images/tech/canva.png",
            level: "Intermediate"
        },
        {
            name: "Git & GitHub",
            description: "Version control and collaboration",
            icon: "/src/images/tech/github.png",
            level: "Intermediate"
        }
    ];
    const softSkills = [
        "Creative thinking and solution thinker",
        "Can work in a team or alone",
        "Friendly, helpful and open to learn more",
        "Good at making plans",
        "Always on time and present",
        "Has a driver's license B"
    ];

    const learningGoals = [
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

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <FadeInSection delay={100}>
                <h1 className="text-4xl font-bold text-yellow-400 mb-4">What have I learned</h1>
                <p className="text-gray-300 mb-12 text-lg">My journey through technology and development</p>
            </FadeInSection>

            {/* Technical skills grid */}
            <div className="mb-16">
                <FadeInLeft delay={200}>
                    <h2 className="text-2xl font-bold text-yellow-400 mb-6">Technical Skills</h2>
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
                                <p className="text-gray-400 text-sm text-center mb-2">{skill.description}</p>
                                <div className="mt-3 text-center">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium
                                        ${skill.level === 'Advanced' ? 'bg-green-900 text-green-300' :
                                        skill.level === 'Proficient' ? 'bg-blue-900 text-blue-300' :
                                            skill.level === 'Intermediate' ? 'bg-yellow-900 text-yellow-300' :
                                                skill.level === 'Growing' ? 'bg-purple-900 text-purple-300' :
                                                    'bg-gray-700 text-gray-300'}`}>
                                        {skill.level}
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
                    <h2 className="text-2xl font-bold text-yellow-400 mb-6">Soft Skills & Qualities</h2>
                </FadeInRight>
                <FadeInScale delay={500}>
                    <div className="bg-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {softSkills.map((skill, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
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
                    <h2 className="text-2xl font-bold text-yellow-400 mb-6">My Learning Goals</h2>
                </FadeInLeft>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {learningGoals.map((goal, index) => (
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