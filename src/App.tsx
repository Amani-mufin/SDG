import React from "react";
import "./App.css";
import Benefits from "./components/benefits";
import Newsletter from "./components/newsletter";
import Navber from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer"

function App() {
  return (
    <>
      <Navber />
      <Hero />
      <Benefits />
      <Newsletter />
      <Footer/>
    </>
  );
}

export default App;
