import SongForm from "./pages/SongForm";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/songs",
        element: <Songs />,
        errorElement: <ErrorPage />

    },
    {
        path: "/song/new",
        element: <SongForm />,
        errorElement: <ErrorPage />
    }
]

export default routes;