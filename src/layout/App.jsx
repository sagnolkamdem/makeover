import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Accueil from "../pages/Accueil";
import ServicesPage from "../pages/ServicesPage";

function App() {
  return (
    <main>

      <section className="flex flex-col w-screen">
        <div className="mb-2">
          <Navbar />
        </div>
      </section>

      <BrowserRouter>

        <Routes>

          <Route path="/services" element={<ServicesPage />} />

          <Route path="/" element={<Accueil />} />

        </Routes>

      </BrowserRouter>
      
      <section className="w-screen h-screen overflow-hidden" id="footer">
        <Footer />
      </section>

    </main>
  );
}

export default App;

{/* <Router className="flex flex-col">


</Router> */}
