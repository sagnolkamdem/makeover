import About from "./About";
import BestSellers from "./BestSellers";
import Footer from "../components/Footer";
import Homepage from "./Homepage";
import Navbar from "../components/Navbar";
import Services from "./Services";

function App() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col w-screen h-screen overflow-hidden" id="homepage">
        <div className="mb-6">
          <Navbar />
        </div>
        <div className="flex flex-1">
          <Homepage />
        </div>
      </section>

      <section className="w-screen h-screen overflow-hidden" id="services">
        <Services />
      </section>

      <section className="w-screen h-screen overflow-hidden" id="about">
        <About />
      </section>

      <section className="w-screen h-screen overflow-hidden" id="best">
        <BestSellers />
      </section>

      <section className="w-screen h-screen overflow-hidden" id="footer">
        <Footer />
      </section>
    </main>
  );
}

export default App;
