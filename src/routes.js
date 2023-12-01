import Home from "./pages/Home";
import Songs from "./pages/Songs";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />
    },
    {
        path: "/songs",
        element: <Songs />,
        errorElement: <ErrorPage />
    }
]

export default routes;