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
import PrivateRoute from "../provider/PrivateRoute";
import UpdateInfo from "../components/UpdateInfo";

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
                element:
                    <PrivateRoute>
                        <AboutPage />
                    </PrivateRoute>,
                loader: () => fetch('/gameData.json'),
                hydrateFallbackElement: <LoadingPage></LoadingPage>
            },
            {
                path: '/game-details/:id',
                element:
                    <PrivateRoute>
                        <GameDetailsPage />
                    </PrivateRoute>,
                loader: () => fetch('/gameData.json'),
                hydrateFallbackElement: <LoadingPage></LoadingPage>
            },
            {
                path: '/my-profile',
                element:
                    <PrivateRoute>
                        <MyProfilePage />
                    </PrivateRoute>,

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
            },
            {
                path: '/auth/update-profile',
                element: <UpdateInfo />
            }
        ]

    },
]);

export default router;