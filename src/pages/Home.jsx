export default function Home() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                <div className="flex-1 space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-5xl font-bold text-yellow-400">
                            Welcome, this is me!
                        </h1>
                        <p className="text-xl text-gray-300">
                            I build things because I enjoy turning ideas into something real.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-300 leading-relaxed">
                            I like programming because it feels like solving small puzzles every day.
                            You start with nothing, and step by step you build something that actually works!
                            For me, coding is a mix of logic and creativity. I enjoy thinking about how things
                            should work, but also how they should look and feel.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            This portfolio is a collection of my projects, experiments, and things I learned
                            along the way. It represents how I grow as a developer.
                        </p>
                    </div>
                </div>

                {/* right side picture */}
                <div className="flex-1 flex justify-center">
                    <div className="w-80 h-80 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500
                                    flex items-center justify-center shadow-2xl border-4 border-yellow-400">
                        <div className="w-72 h-72 rounded-full overflow-hidden bg-gray-700">
                            <img src="/src/images/ProfilePicture.jpeg" alt="Profile" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Me section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">About Me</h2>

                {/* Who I am */}
                <div className="bg-gray-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-400">Who I am</h3>
                    <p className="text-gray-300 leading-relaxed">
                        My name is Ishika, and I'm currently studying Creative Media & Game Technologies
                        at Rotterdam University of Applied Sciences.
                        I'm someone who enjoys learning by doing and figuring things out step by step.
                        I don't see programming as something you instantly master. For me, it's about
                        improving a little bit every time I work on something.
                    </p>
                </div>

                {/* Why I started programming */}
                <div className="bg-gray-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-400">Why I started programming</h3>
                    <p className="text-gray-300 leading-relaxed">
                        I originally started programming because I want to work in the game industry.
                        The idea of creating games and interactive worlds really interests me. Right now,
                        I mostly work on websites, and I actually enjoy that more than I expected. I like
                        being creative with layouts, colors, and small details. In the future, I'd like to
                        combine creativity and technology, whether that's in games, websites, or something
                        I haven't discovered yet.
                    </p>
                </div>

                {/* What I enjoy */}
                <div className="bg-gray-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-400">What I enjoy</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Outside of coding, I spend a lot of time on creative and relaxing hobbies.
                        I really enjoy playing video games and watching anime. I also like watching
                        Formula 1 together with my family. Other things I like are building LEGO sets,
                        designing or upgrading house interiors in software or games, and coloring pixel art.
                        I enjoy calm, creative activities where I can focus on details.
                    </p>
                </div>
            </div>

            {/* Fun Facts & Contact Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800 rounded-2xl p-8">
                    <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Fun Fact</h2>
                    <div className="text-center space-y-4">
                        <h3 className="text-2xl font-semibold text-white">About this website theme</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Persona 4 Golden is my all time favorite game! The characters, story,
                            and the whole aesthetic of Inaba have inspired my portfolio design.
                        </p>
                    </div>
                </div>

                {/* contacts fast */}
                <div className="bg-gray-800 rounded-2xl p-8">
                    <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Connect with me</h2>
                    <div className="space-y-4">
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/ishika-soebhag-67a608359?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all group">
                            <div className="flex items-center space-x-4">
                                <img src="/src/images/tech/linkin.png" alt="LinkedIn" className="w-8 h-8 object-contain"/>
                                <span className="text-white font-medium">LinkedIn</span>
                            </div>
                            <span className="text-gray-400 group-hover:text-yellow-400 transition-colors">→</span>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/Shav0nne" target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all group">
                            <div className="flex items-center space-x-4">
                                <img src="/src/images/tech/github.png" alt="GitHub" className="w-8 h-8 object-contain"/>
                                <span className="text-white font-medium">GitHub</span>
                            </div>
                            <span className="text-gray-400 group-hover:text-yellow-400 transition-colors">→</span>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:esoebhag@gmail.com"
                            className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all group">
                            <div className="flex items-center space-x-4">
                                <img src="/src/images/tech/gmail.png" alt="Email" className="w-8 h-8 object-contain"/>
                                <span className="text-white font-medium">Email</span>
                            </div>
                            <span className="text-gray-400 group-hover:text-yellow-400 transition-colors">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}