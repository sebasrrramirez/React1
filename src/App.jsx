import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import CardProducts from './components/CardsProducts/CardProducts.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

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

