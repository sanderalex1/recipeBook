import MenuProvider from "./contexts/MenuContext";
import Header from "./components/Layout/Header";
import { Outlet } from "react-router-dom";
import { FavoriteProvider } from "./contexts/FavoritesContext";
function App() {
  return (
    <FavoriteProvider>
      <MenuProvider>
        <Header />
        <Outlet />
      </MenuProvider>
    </FavoriteProvider>
  );
}

export default App;
