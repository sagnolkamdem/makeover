import About from "../components/About";
import Services from "../components/Services";
import BestSellers from "../components/BestSellers";
import Homepage from "../components/Homepage";

const Accueil = () => {
    return ( 
        <div className="flex flex-col gap-10">

            <section className="w-screen h-screen overflow-hidden">
                <Homepage />
            </section>

            <section className="w-screen h-screen overflow-hidden">
                <Services />
            </section>

            <section className="w-screen h-screen overflow-hidden">
                <About />
            </section>

            <section className="w-screen h-screen overflow-hidden">
                <BestSellers />
            </section>

        </div>
     );
}
 
export default Accueil;