"use client";

import About from "./components/About";
import Clients from "./components/Clients";
import Designs from "./components/Designs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className="sm:h-[6rem] h-[5rem]" />
        <HomePage />
        <Features />
        <Clients />
        <About />
        <Designs />
        <Footer />
      </div>
    </>
  );
}
