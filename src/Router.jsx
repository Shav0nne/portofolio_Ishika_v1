import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Learnings from "./pages/Learnings";
import Contact from "./pages/Contact";
import ModalDetail from "./pages/ModalDetail";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        //children, element en error
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/modal/:id", element: <ModalDetail /> },
        ],
    },
]);

export default router;
