// src/pages/About.tsx

import Mission from "@/components/(landing)/Mission";
import CoreValues from "@/components/about/CoreValues";
import Workspace from "@/components/about/Workspace";
import Team from "@/components/(landing)/Team";
import CallToAction from "@/components/about/CallToAction";

const About = () => {
  return (
    <main>
      <Mission />
      <CoreValues />
      <Workspace />
      <Team />
      <CallToAction />
    </main>
  );
};

export default About;