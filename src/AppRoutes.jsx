import Test from "./components/Test";
import Home from "./components/Home";
import Contact from "./components/Contact";

const AppRoutes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/Test',
        element: <Test />
    },
    {
        path: '/Contact',
        element: <Contact />
    }
];

export default AppRoutes;