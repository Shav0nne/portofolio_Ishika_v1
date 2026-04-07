import { Link } from "react-router-dom";
import { FadeInSection, FadeInLeft, FadeInRight, FadeInScale } from "./Animations";
import { useLanguage } from '../context/Language';

export default function ProjectDetail({ project }) {
    const { language } = useLanguage();

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Back Button */}
            <FadeInSection delay={100}>
                <Link to="/projects" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors">
                    ← {language === 'en' ? 'Back to Projects' : 'Terug naar Projecten'}
                </Link>
            </FadeInSection>

            {/* Title section */}
            <FadeInSection delay={200}>
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-yellow-400 mb-4">{project.title}</h1>
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                           className="inline-flex items-center bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                            {language === 'en' ? 'View Live Project' : 'Bekijk Live Project'}
                        </a>
                    )}
                </div>
            </FadeInSection>

            {/* image*/}
            <FadeInScale delay={300}>
                <div className="bg-gray-800 rounded-2xl overflow-hidden mb-8">
                    <div className="bg-gray-900 flex items-center justify-center p-4">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="max-w-full h-auto max-h-[500px] object-contain rounded-lg"
                            style={{ maxHeight: "500px", width: "auto" }}
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/800x500?text=Project+Image";
                            }}
                        />
                    </div>
                </div>
            </FadeInScale>

            {/* Content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {/* Main Content - Description */}
                <div className="lg:col-span-2 space-y-8">
                    <FadeInLeft delay={400}>
                        <div className="bg-gray-800 rounded-2xl p-6">
                            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                                {language === 'en' ? 'About the Project' : 'Over het Project'}
                            </h2>
                            <div className="text-gray-300 leading-relaxed space-y-4">
                                {language === 'en' ? project.descriptionEn : project.descriptionNl}
                            </div>
                        </div>
                    </FadeInLeft>

                    {/* Development section */}
                    {project.development && (
                        <FadeInLeft delay={500}>
                            <div className="bg-gray-800 rounded-2xl p-6">
                                <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                                    {language === 'en' ? 'Development Process' : 'Ontwikkelingsproces'}
                                </h2>
                                <div className="text-gray-300 leading-relaxed space-y-4">
                                    {language === 'en' ? project.developmentEn : project.developmentNl}
                                </div>
                            </div>
                        </FadeInLeft>
                    )}
                </div>

                {/* Sidebar tech tools*/}
                <div className="space-y-8">
                    <FadeInRight delay={450}>
                        <div className="bg-gray-800 rounded-2xl p-6">
                            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                                {language === 'en' ? 'Tech Stack' : 'Technologieën'}
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                {project.techStack.map((tech, index) => (
                                    <div key={index} className="flex flex-col items-center bg-gray-700 rounded-lg p-3 min-w-[80px]">
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="w-10 h-10 mb-2 object-contain"
                                            onError={(e) => {
                                                e.target.src = "https://via.placeholder.com/40?text=" + tech.name.charAt(0);
                                            }}/>
                                        <span className="text-xs text-gray-300 text-center">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeInRight>

                    {/* Tools Used */}
                    {project.tools && (
                        <FadeInRight delay={550}>
                            <div className="bg-gray-800 rounded-2xl p-6">
                                <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                                    {language === 'en' ? 'Tools Used' : 'Gebruikte Hulpmiddelen'}
                                </h2>
                                <div className="flex flex-wrap gap-4">
                                    {project.tools.map((tool, index) => (
                                        <div key={index} className="flex flex-col items-center bg-gray-700 rounded-lg p-3 min-w-[80px]">
                                            <img src={tool.icon} alt={tool.name} className="w-10 h-10 mb-2 object-contain"
                                                 onError={(e) => {
                                                     e.target.src = "https://via.placeholder.com/40?text=" + tool.name.charAt(0);}}
                                            />
                                            <span className="text-xs text-gray-300 text-center">{tool.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeInRight>
                    )}

                    {/* Links */}
                    {project.github && (
                        <FadeInRight delay={600}>
                            <div className="bg-gray-800 rounded-2xl p-6">
                                <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                                    {language === 'en' ? 'Links' : 'Links'}
                                </h2>
                                <a href={project.github} target="_blank" rel="noopener noreferrer"
                                   className="flex items-center justify-between p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                                    <span>GitHub Repository</span>
                                    <span className="text-yellow-400">→</span>
                                </a>
                            </div>
                        </FadeInRight>
                    )}
                </div>
            </div>

            {/* Additional Images Section */}
            {project.additionalImages && project.additionalImages.length > 0 && (
                <FadeInScale delay={700}>
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
                            {language === 'en' ? 'More Screenshots' : 'Meer Schermafbeeldingen'}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.additionalImages.map((img, index) => (
                                <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden">
                                    <div className="bg-gray-900 flex items-center justify-center p-4">
                                        <img src={img.src} alt={img.alt || `Screenshot ${index + 1}`} className="max-w-full h-auto max-h-[400px] object-contain rounded-lg" style={{ maxHeight: "400px", width: "auto" }}
                                             onError={(e) => {
                                                 e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found";}}/>
                                    </div>
                                    {img.caption && (
                                        <p className="text-gray-400 text-sm text-center py-3">{img.caption}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeInScale>
            )}
        </div>
    );
}