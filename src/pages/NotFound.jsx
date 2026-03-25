import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-yellow-400 mb-4">404</h1>
                <h2 className="text-2xl text-white mb-4">Page Not Found</h2>
                <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
                <Link to="/" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                    Go back home
                </Link>
            </div>
        </div>
    );
}