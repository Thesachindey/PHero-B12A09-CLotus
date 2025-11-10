import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import GameDetailsPage from "../pages/GameDetailsPage";
import MyProfilePage from "../pages/MyProfilePage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts />,
        errorElement: <NotFoundPage />, //  This will show when route not found
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/register',
                element: <RegisterPage />
            },
            {
                path: '/game-details',
                element: <GameDetailsPage />
            },
            {
                path: '/my-profile',
                element: <MyProfilePage />
            }
        ]
    },
]);

export default router;