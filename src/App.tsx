
import { Navbar } from "./pages/Navbar/Navbar";
import { AppRouter } from "./router/AppRouter";

function App() {
  // Es el componente principal de nuestra aplicación el cual
  // contendra toda nuestra aplicación
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;
