import { useEffect } from "react";
import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import CoreValues from "@/components/about/CoreValues";
import Workspace from "@/components/about/Workspace";
import Team from "@/components/about/Team";
import Navbar from "@/components/Navbar";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Navbar page="about" />
      <AboutHero />
      <Mission />
      <CoreValues />
      <Workspace />
      <Team />
    </main>
  );
};

export default About;