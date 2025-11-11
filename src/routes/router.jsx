import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import GameDetailsPage from "../pages/GameDetailsPage";
import MyProfilePage from "../pages/MyProfilePage";
import NotFoundPage from "../pages/NotFoundPage";
import LoadingPage from "../pages/LoadingPage";
import PopularGames from "../pages/PopularGames";
import AuthLayouts from "../layouts/AuthLayouts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/popular-games',
                element: <PopularGames />
            },
            {
                path: '/all-games',
                element: <AboutPage />,
                loader: () => fetch('/gameData.json'),
                hydrateFallbackElement: <LoadingPage></LoadingPage>
            },
            {
                path: '/game-details/:id',
                element: <GameDetailsPage />,
                loader: () => fetch('/gameData.json'),
                hydrateFallbackElement: <LoadingPage></LoadingPage>
            },
            {
                path: '/my-profile',
                element: <MyProfilePage />
            },
            {
                path: "/*",
                element: <NotFoundPage />,

            }
        ]
    },
     {
        path: "/auth",
        element: <AuthLayouts />,
        children: [
            {
                path: '/auth/login',
                element: <LoginPage />
            },
            {
                path: '/auth/register',
                element: <RegisterPage />
            }
        ]

    },
]);

export default router;