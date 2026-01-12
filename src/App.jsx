import "./App.css";
import { Routes, Route } from "react-router-dom";

import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Registration from "./sections/Registration/Registration";
import Gallery from "./sections/Gallery/Gallery"; 
import { SpeedInsights } from "@vercel/speed-insights/next"

// Home page component
function Home() {
  return (
    <>
     <SpeedInsights />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
     
      <Gallery /> 
       <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
}

export default App;
