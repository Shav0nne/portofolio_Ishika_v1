import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="bg-gray-900 border-b-2 border-yellow-400 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
                        Ishika.dev
                    </Link>
                    <div className="flex items-center space-x-8">
                        <Link to="/" className={`transition-colors font-medium ${
                                isActive("/") ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"}`}>Home
                        </Link>
                        <Link to="/projects" className={`transition-colors font-medium ${
                                isActive("/projects") ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"}`}>Projects
                        </Link>
                        <Link to="/learnings" className={`transition-colors font-medium ${
                                isActive("/learnings") ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"}`}>Learnings
                        </Link>
                        <Link to="/contact" className={`transition-colors font-medium ${
                                isActive("/contact") ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"}`}>Contact
                        </Link>
                        <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                            EN
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}