/* Import des composants de la page d'accueil */
import Navigation from "@/src/components/navigation";

import Welcome from "@/src/components/welcome";
import About from "@/src/components/about";
import Values from "@/src/components/values";
import Future from "@/src/components/future";

import Goals from "@/src/components/goals";
import Course from "@/src/components/course";
import Contact from "@/src/components/contact";

export default function Home() {
  return (
    <>
      <main>
        <Navigation />
        <Welcome />
        <About />
        <Values />
        <Future />
        <Goals />
        <Course />
        <Contact />
      </main>
    </>
  );
}
