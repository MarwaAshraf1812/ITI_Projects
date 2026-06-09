import Navbar from "./components/shared/Navbar";
import Home from "./components/sections/home";
import About from "./components/sections/about";
import CustomizeSection from './components/sections/CustomizeSection';
import Product from "./components/sections/Product";
import Footer from "./components/shared/Footer";
import Contact from "./components/sections/contact";

function App() {
  return (
    <>
    
      <Navbar />
      <Home />
      <CustomizeSection />
      <About />
      <Product />
      <Contact />
      <Footer />
    </>
  )
}

export default App;