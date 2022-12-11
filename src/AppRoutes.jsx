import Direction from "./components/Direction";
import Home from "./components/Home";
import Contact from "./components/Contact";

const AppRoutes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/Direction',
        element: <Direction />
    },
    {
        path: '/Contact',
        element: <Contact />
    }
];

export default AppRoutes;