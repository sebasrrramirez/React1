import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import Hero from './components/Hero/Hero.jsx';
import CardProducts from './components/CardsProducts/CardProducts.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <CardProducts />
      <Footer />
    </>
  );
}

