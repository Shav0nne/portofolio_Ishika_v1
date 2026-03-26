import { FadeInSection, FadeInScale } from "../components/Animations";
import { images } from '../utils/images';

export default function Contact() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header Section */}
            <FadeInSection delay={100}>
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-yellow-400 mb-4">Let's Connect!</h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Have a question, a project idea, or just want to say hi? I'd love to hear from you!
                        Feel free to reach out through any of the platforms below.
                    </p>
                </div>
            </FadeInSection>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* LinkedIn Card */}
                <FadeInScale delay={200}>
                    <a href="https://www.linkedin.com/in/ishika-soebhag-67a608359?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer"
                       className="bg-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 text-center group flex flex-col items-center h-full">
                        <div className="flex justify-center mb-4">
                            <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                                <img src={images.tech.linkin} alt="LinkedIn"
                                     className="w-12 h-12 object-contain"
                                     onError={(e) => {
                                         e.target.src = "https://via.placeholder.com/48?text=IN";
                                     }}
                                />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-yellow-400 mb-2">LinkedIn</h2>
                        <p className="text-gray-400 mb-4">Connect professionally</p>
                        <span className="inline-block text-yellow-400 group-hover:translate-x-1 transition-transform mt-auto">
                            Connect →
                        </span>
                    </a>
                </FadeInScale>

                {/* GitHub Card */}
                <FadeInScale delay={350}>
                    <a href="https://github.com/Shav0nne" target="_blank" rel="noopener noreferrer"
                       className="bg-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 text-center group flex flex-col items-center h-full">
                        <div className="flex justify-center mb-4">
                            <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                                <img src={images.tech.github} alt="GitHub" className="w-12 h-12 object-contain"
                                     onError={(e) => {e.target.src = "https://via.placeholder.com/48?text=GH";}}
                                />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-yellow-400 mb-2">GitHub</h2>
                        <p className="text-gray-400 mb-4">Check out my code</p>
                        <span className="inline-block text-yellow-400 group-hover:translate-x-1 transition-transform mt-auto">
                            View Projects →
                        </span>
                    </a>
                </FadeInScale>

                {/* Email Card */}
                <FadeInScale delay={500}>
                    <a href="mailto:esoebhag@gmail.com"
                       className="bg-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 text-center group flex flex-col items-center h-full">
                        <div className="flex justify-center mb-4">
                            <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                                <img src={images.tech.gmail} alt="Email" className="w-12 h-12 object-contain"
                                     onError={(e) => {
                                         e.target.src = "https://via.placeholder.com/48?text=@";
                                     }}
                                />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-yellow-400 mb-2">Email</h2>
                        <p className="text-gray-400 mb-4">Send me a message</p>
                        <span className="inline-block text-yellow-400 group-hover:translate-x-1 transition-transform mt-auto">
                            Send Message →
                        </span>
                    </a>
                </FadeInScale>
            </div>

            {/* CV Download Section */}
            <FadeInScale delay={650}>
                <div className="bg-gradient-to-r bg-yellow-400 rounded-2xl p-8 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Download My CV</h2>
                        <p className="text-gray-800 mb-6">
                            Interested in working together? Download my CV to learn more about my experience,
                            skills, and background. I'm always open to new opportunities and collaborations!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/cv/ishika-cv-nl.pdf" download
                               className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                                Download CV (NL)
                            </a>
                            <a href="/cv/ishika-cv-eng.pdf" download
                               className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                                Download CV (ENG)
                            </a>
                        </div>
                    </div>
                </div>
            </FadeInScale>

            {/* Footer note */}
            <FadeInSection delay={800}>
                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm">
                        Usually respond within 24 hours
                    </p>
                </div>
            </FadeInSection>
        </div>
    );
}