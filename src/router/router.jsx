import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MenuPage from "../pages/MenuPage";
import FavoritePage from "../pages/FavoritePage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <MenuPage /> },
        { path: "favorites", element: <FavoritePage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

export default router;
