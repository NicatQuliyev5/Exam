import Add from "../pages/Add";
import Detail from "../pages/Detail";
import Fav from "../pages/Fav";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";

export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/add",
                element: <Add />
            },
            {
                path: "/add",
                element: <Add />
            },
            {
                path: "/detail/:id",
                element: <Detail />
            },
            {
                path: "/fav",
                element: <Fav />
            },
        ]

    }
]