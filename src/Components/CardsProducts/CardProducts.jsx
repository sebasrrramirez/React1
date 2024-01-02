import React from "react";
import "./CardProducts.css";
import dataArray from "./datos.js"; 

const CardProducts= () => {
    const Card = ({ datos }) => {
        return (
            <div className="card">
                <div className="card-img"><img src={datos.cardImg} alt=""/></div>
                <div className="card-info">
                    <p className="text-title">{datos.title}</p>
                    <p className="text-body">{datos.description}</p>
                </div>
                <div className="card-footer">
                <span className="text-price">U$S {datos.price}</span>
                </div>
          </div>
        );
      };
      
    return (
          <div className="products-container">
              {dataArray.map((item, index) => (
              <Card key={index} datos={item} />
            ))}
          </div>
        );
      };
      
export default CardProducts