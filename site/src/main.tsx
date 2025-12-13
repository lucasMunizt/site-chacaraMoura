import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Site } from "./components/Common/site";
import Login from "./plataforma/login";
import { Home } from "lucide-react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Site /> },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"home",
        element:<Home/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
