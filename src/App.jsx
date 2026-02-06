import MenuPage from "./pages/MenuPage";
import MenuProvider from "./contexts/MenuContext";
function App() {
  return (
    <MenuProvider>
      <MenuPage />
    </MenuProvider>
  );
}

export default App;
