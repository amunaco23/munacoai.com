import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import HowItWorks from "./components/HowItWorks";
import Availability from "./components/Availability";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060606]">
      <Nav />
      <Hero />
      <WhatIDo />
      <HowItWorks />
      <Availability />
      <FinalCTA />
    </main>
  );
}
