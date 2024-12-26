import { createBrowserRouter } from "react-router-dom"

import Home from "./Pages/Home"
import ListerUser from "./Pages/ListerUser"

const router = createBrowserRouter ([

    {
        path: "/",
        element: <Home />
    },
    {
        path: "/lista-de-usuarios",
        element: <ListerUser />
    }
])

export default router