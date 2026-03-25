import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
            <Navbar />
            <main>
                <Home />
            </main>
            <footer className="text-center py-6 bg-gray-900 text-gray-400 border-t border-gray-700">
                <div className="max-w-6xl mx-auto px-4">
                    <p>© 2026 Ishika. All rights reserved.</p>
                    <p className="text-sm mt-2">Inspired by Persona 4 Golden ✨</p>
                </div>
            </footer>
        </div>
    );
}