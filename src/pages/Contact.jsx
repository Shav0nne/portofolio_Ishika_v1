export default function Contact() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-yellow-400 mb-4">Let's Connect!</h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Have a question, a project idea, or just want to say hi? I'd love to hear from you!
                    Feel free to reach out through any of the platforms below.
                </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* LinkedIn Card */}
                <a href="https://www.linkedin.com/in/ishika-soebhag-67a608359?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer"
                    className="bg-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 text-center group">
                    <div className="flex justify-center mb-4">
                        <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                            <img src="/src/images/linkedin-logo.png" alt="LinkedIn"
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
                <a href="https://github.com/Shav0nne" target="_blank" rel="noopener noreferrer"
                    className="bg-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 text-center group">
                    <div className="flex justify-center mb-4">
                        <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                            <img src="/src/images/GitHub-logo.png" alt="GitHub" className="w-12 h-12 object-contain"
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
                <a href="mailto:esoebhag@gmail.com"
                    className="bg-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 text-center group">
                    <div className="flex justify-center mb-4">
                        <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                            <img src="/src/images/gmail-logo.png" alt="Email" className="w-12 h-12 object-contain"
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Download My CV</h2>
                    <p className="text-gray-800 mb-6">
                        Interested in working together? Download my CV to learn more about my experience,
                        skills, and background. I'm always open to new opportunities and collaborations!
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="/cv/ishika-cv-nl.pdf" download
                            className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                            Download CV (NL)
                        </a>
                        <a href="/cv/ishika-cv-eng.pdf" download
                            className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                            Download CV (ENG)
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-gray-500 text-sm mt-2">
                    Usually respond within 24 hours
                </p>
            </div>
        </div>
    );
}