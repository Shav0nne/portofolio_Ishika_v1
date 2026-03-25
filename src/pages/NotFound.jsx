import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="text-center p-10">
            <h1 className="text-4xl font-bold mb-3">404</h1>
            <p>Pagina niet gevonden</p>
            <Link to="/" className="text-blue-500 underline mt-4 block">
                Terug naar Home
            </Link>
        </div>
    );
}

// export default NotFound;