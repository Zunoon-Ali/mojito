import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menus from "./components/Menu";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menus />
    </main>
  );
}

export default App;
