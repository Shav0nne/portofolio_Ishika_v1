import { createHashRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import TheBizzareKriboAdventure from "./pages/detailprojects/TheBizzareKriboAdventure";
import PlanetKeeper from "./pages/detailprojects/PlanetKeeper";
import KingdomHeartsGuide from "./pages/detailprojects/KingdomHeartsGuide";
import Poppy from "./pages/detailprojects/Poppy";
import Trippie from "./pages/detailprojects/Trippie";
import Learnings from "./pages/Learnings";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
            { path: "projects", element: <Projects /> },
            { path: "projects/the-bizarre-kribo-adventure", element: <TheBizzareKriboAdventure /> },
            { path: "projects/planet-keeper", element: <PlanetKeeper /> },
            { path: "projects/kingdom-hearts-guide", element: <KingdomHeartsGuide /> },
            { path: "projects/poppy", element: <Poppy /> },
            { path: "projects/trippie", element: <Trippie /> },
            { path: "learnings", element: <Learnings /> },
            { path: "contact", element: <Contact /> },
        ],
    },
]);

export default router;