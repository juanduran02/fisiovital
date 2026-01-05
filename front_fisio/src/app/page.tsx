import Hero from "../components/layout/Hero";
import Navbar from "../components/layout/Navbar";
import Services from "../components/features/home/Services";
import WhyChooseUs from "../components/features/home/WhyChooseUs";
import Testimonials from "../components/features/home/Testimonials";
import AboutUs from "../components/features/home/aboutUs";
import Contact from "../components/features/home/Contact";
import Footer from "../components/layout/Footer";


export default function Home() {
  return (
    <main>
    <Navbar/>
    <div id="Inicio">
    <Hero/>
    </div>
    <div id="Servicios">
    <Services/>
    </div>
    <div id="Escogenos">
    <WhyChooseUs/>
    </div>
    <div id="Testimonios">
    <Testimonials/>
    </div>
    <div id="AcercaDeNosotros">
    <AboutUs/>
    </div>
    <div id="Contacto">
    <Contact/>
    </div>
    <Footer/>
    </main>
  );
}
