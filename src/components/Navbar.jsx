import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path) => {
        return location.pathname === path;};

    const toggleMenu = () => {setIsMenuOpen(!isMenuOpen);};
    const closeMenu = () => {setIsMenuOpen(false);};

    return (
        <nav className="bg-gray-900 border-b-2 border-yellow-400 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors" onClick={closeMenu}>
                        Ishika.dev
                    </Link>

                    {/* desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className={`transition-colors font-medium ${
                            isActive("/") ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"}`}>
                            Home
                        </Link>
                        <Link to="/projects" className={`transition-colors font-medium ${
                            isActive("/projects") ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"}`}>
                            Projects
                        </Link>
                        <Link to="/learnings" className={`transition-colors font-medium ${
                            isActive("/learnings") ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"}`}>
                            Learnings
                        </Link>
                        <Link to="/contact" className={`transition-colors font-medium ${
                            isActive("/contact") ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"}`}>
                            Contact
                        </Link>
                        <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                            EN
                        </button>
                    </div>

                    {/* hamburger button, ai used */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-800 transition-colors"
                        aria-label="Menu">
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                    </button>
                </div>

                {/* Mobiel Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
                }`}>
                    <div className="flex flex-col space-y-4">
                        <Link
                            to="/"
                            className={`transition-colors font-medium py-2 ${
                                isActive("/") ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"
                            }`}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="/projects"
                            className={`transition-colors font-medium py-2 ${
                                isActive("/projects") ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"
                            }`}
                            onClick={closeMenu}
                        >
                            Projects
                        </Link>
                        <Link
                            to="/learnings"
                            className={`transition-colors font-medium py-2 ${
                                isActive("/learnings") ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"
                            }`}
                            onClick={closeMenu}
                        >
                            Learnings
                        </Link>
                        <Link
                            to="/contact"
                            className={`transition-colors font-medium py-2 ${
                                isActive("/contact") ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"
                            }`}
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                        <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors w-full">
                            EN
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}