import Main from "../companents/main/Root";
import MenPage from "../pages/mens";
import WomenPage from "../pages/women";
import SportPage from "../pages/sport";
import TrainersPage from "../pages/sport/components/trainersPage";

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
        path: "/women",
        element: <WomenPage />,
    },
    {
        id: 4,
        path: "/sport",
        element: <SportPage />,
    },
    {
        id: 5,
        path: "/trainers",
        element: <TrainersPage />,
    },
]; 
