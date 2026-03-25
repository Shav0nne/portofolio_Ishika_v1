export default function Projects() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-yellow-400 mb-8">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project cards komen hier */}
                <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Project 1</h3>
                    <p className="text-gray-400">Description of your project</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Project 2</h3>
                    <p className="text-gray-400">Description of your project</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Project 3</h3>
                    <p className="text-gray-400">Description of your project</p>
                </div>
            </div>
        </div>
    );
}