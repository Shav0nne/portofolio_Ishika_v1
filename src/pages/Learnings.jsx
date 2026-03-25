export default function Learnings() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-yellow-400 mb-8">My Learnings</h1>
            <div className="space-y-6">
                <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2 text-yellow-400">Learning Topic 1</h3>
                    <p className="text-gray-300">What I've learned and my progress...</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2 text-yellow-400">Learning Topic 2</h3>
                    <p className="text-gray-300">What I've learned and my progress...</p>
                </div>
            </div>
        </div>
    );
}