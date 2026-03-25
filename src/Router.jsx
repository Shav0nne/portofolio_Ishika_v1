import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
// import Learnings from "./pages/Learnings";
// import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
            { path: "projects", element: <Projects /> },
            // { path: "learnings", element: <Learnings /> },
            // { path: "contact", element: <Contact /> },
        ],
    },
]);

export default router;