import Main from "../companents/main/Root";
import MenPage from "../pages/mens";
import WomenPage from "../pages/women";
import SportPage from "../pages/sport";

export const full = [
    {
        id: 1,
        path: "/",
        element: <Main />,
    },
    {
        id: 2,
        path: "/men",
        element: <MenPage />,
    },
    {
        id: 3,
        path: "women",
        element: <WomenPage />,
    },
    {
        id: 4,
        path: "/sport",
        element: <SportPage />,
    },
]; 
