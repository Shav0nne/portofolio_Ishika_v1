import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useLanguage } from "../context/Language";

export default function Layout() {
    const { t } = useLanguage();

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <footer className="text-center py-6 bg-gray-900 text-gray-400 border-t border-gray-700">
                <div className="max-w-6xl mx-auto px-4">
                    <p>© 2026 Ishika</p>
                    <p className="text-sm mt-2">{t('inspired')}</p>
                </div>
            </footer>
        </div>
    );
}