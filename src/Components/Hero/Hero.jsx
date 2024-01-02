import React from "react";

//import mi archivo css
import "./Hero.css";

const Hero = () => {
  return (
    <article className="hero-image">
        <div>
          <h1>UNIVERSO TENIS</h1>
          <p>Tenemos lo último en equipos para tenis.</p>
          <p>Encontra las mejores marcas, en un solo lugar</p>
          <a href="#products" className="ov-btn-grow-skew">Comprar ahora</a>
        </div>
    </article>
  );
};

export default Hero;
