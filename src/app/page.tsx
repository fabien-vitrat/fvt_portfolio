/* Import des composants de la page d'accueil */
import Navigation from "@/src/components/navigation";

import Welcome from "@/src/components/welcome";
import About from "@/src/components/about";
import Values from "@/src/components/values";
import Future from "@/src/components/future";
import Portfolio from "../components/portfolio";
import Goals from "@/src/components/goals";
import Course from "@/src/components/course";
import Contact from "@/src/components/contact";

import Skills from "@/src/components/skills";
import Footer from "@/src/components/footer";


export default function Home() {
  return (
    <>
      <main>
        <Navigation />
        <Welcome />
        <About />
        <Skills />        
        <Values />
        <Future />
        <Goals />
        <Course />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
