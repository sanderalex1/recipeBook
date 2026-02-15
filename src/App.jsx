import MenuProvider from "./contexts/MenuContext";
import Header from "./components/Layout/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <MenuProvider>
      <Header />
      <Outlet />
    </MenuProvider>
  );
}

export default App;
