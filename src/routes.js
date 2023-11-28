import SongForm from "./components/SongForm";
import Home from "./pages/Home";
import Songs from "./pages/Songs";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/songs",
        element: <Songs />
    },
    {
        path: "/song/new",
        element: <SongForm />
    }
]

export default routes;