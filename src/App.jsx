import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import CardProducts from "./Components/CardsProducts/CardProducts.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardProducts />
      <Footer />
    </>
  );
}

