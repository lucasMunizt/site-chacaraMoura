import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Site } from "./components/Common/site";
import Login from "./plataforma/login";
import SubLotesPage from "./plataforma/sub-lotes";
import HomePage from "./plataforma/home-page";
import PrivateRoute from "./plataforma/services/PrivateRouter";
import PainelCorretor from "./plataforma/painel-corretor";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Site /> },
      {
        path: "login",
        element: <Login />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "home",
            element: <HomePage />,
          },
          {
            path: "sublotes",
            element: <SubLotesPage />,
          },
          {
            path: "painelcorretor",
            element: <PainelCorretor />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
