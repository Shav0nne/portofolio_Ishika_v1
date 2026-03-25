import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-yellow-400 mb-4">Let's Connect!</h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Have a question, project idea, or just want to say hi? I'd love to hear from you!
                    Feel free to reach out through any of the platforms below.
                </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* LinkedIn Card */}
                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 text-center group"
                >
                    <div className="flex justify-center mb-4">
                        <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                            <img
                                src="/src/images/linkedin-logo.png"
                                alt="LinkedIn"
                                className="w-12 h-12 object-contain"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/48?text=IN";
                                }}
                            />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-yellow-400 mb-2">LinkedIn</h2>
                    <p className="text-gray-400 mb-4">Connect professionally</p>
                    <span className="inline-block text-yellow-400 group-hover:translate-x-1 transition-transform">
                        Connect →
                    </span>
                </a>

                {/* GitHub Card */}
                <a
                    href="https://github.com/Shav0nne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 text-center group"
                >
                    <div className="flex justify-center mb-4">
                        <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                            <img
                                src="/src/images/GitHub-logo.png"
                                alt="GitHub"
                                className="w-12 h-12 object-contain"
                                onError={(e) => {e.target.src = "https://via.placeholder.com/48?text=GH";}}
                            />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-yellow-400 mb-2">GitHub</h2>
                    <p className="text-gray-400 mb-4">Check out my code</p>
                    <span className="inline-block text-yellow-400 group-hover:translate-x-1 transition-transform">
                        View Projects →
                    </span>
                </a>

                {/* Email Card */}
                <a
                    href="mailto:esoebhag@gmail.com"
                    className="bg-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 text-center group"
                >
                    <div className="flex justify-center mb-4">
                        <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                            <img
                                src="/src/images/gmail-logo.png"
                                alt="Email"
                                className="w-12 h-12 object-contain"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/48?text=@";
                                }}
                            />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-yellow-400 mb-2">Email</h2>
                    <p className="text-gray-400 mb-4">Send me a message</p>
                    <span className="inline-block text-yellow-400 group-hover:translate-x-1 transition-transform">
                        email →
                    </span>
                </a>
            </div>

            {/* CV Download Section */}
            <div className="bg-gradient-to-r bg-yellow-400 rounded-2xl p-8 text-center">
                <div className="max-w-2xl mx-auto">
                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Download My CV</h2>
                    <p className="text-gray-800 mb-6">
                        Interested in working together? Download my CV to learn more about my experience,
                        skills, and background. I'm always open to new opportunities and collaborations!
                    </p>
                    <a
                        href="/cv/ishika-cv.pdf"
                        download
                        className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download CV (PDF)
                    </a>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-gray-400">
                    📍 Based in the Netherlands | 💼 Open for internships and junior developer positions
                </p>
                <p className="text-gray-500 text-sm mt-2">
                    Usually respond within 24 hours
                </p>
            </div>
        </div>
    );
}