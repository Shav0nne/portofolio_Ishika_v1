export default function Contact() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-yellow-400 mb-8">Contact Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                    <div className="space-y-4">
                        <a href="mailto:your.email@example.com" className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all">
                            <img src="/src/images/email-icon.png" alt="Email" className="w-6 h-6" />
                            <span>your.email@example.com</span>
                        </a>
                        <a href="https://github.com/Shav0nne" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all">
                            <img src="/src/images/github-icon.png" alt="GitHub" className="w-6 h-6" />
                            <span>GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all">
                            <img src="/src/images/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
                <div className="bg-gray-800 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
                    <form className="space-y-4">
                        <input type="text" placeholder="Your name" className="w-full p-3 bg-gray-700 rounded-lg text-white" />
                        <input type="email" placeholder="Your email" className="w-full p-3 bg-gray-700 rounded-lg text-white" />
                        <textarea placeholder="Your message" rows="4" className="w-full p-3 bg-gray-700 rounded-lg text-white"></textarea>
                        <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}