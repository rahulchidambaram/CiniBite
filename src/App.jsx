import Header from "./components/Header";
import Footer from "./components/Footer";
import { AllRoutes } from "./routes/AllRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";

const App = () => {
  return (
    <>
      <ProtectedRoutes>
        <Header />
        <AllRoutes />
        <Footer />
      </ProtectedRoutes>
    </>
  );
};

export default App;
