import React from "react";
import "./Portfolio.css";
import MyCard from "./Card";
import { mydocs } from "../docs";

function Portfolio(props) {
  return (
    <div id="portfolio" className="portfolio">
      <div className="container">
      {/* row-cols-xs-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 */}
        <div className="row row-cols-xs-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {mydocs.map((mydoc) => {
            return (
              <MyCard
                key={mydoc.title}
                title={mydoc.title}
                imageurl={mydoc.imageurl}
                pdfurl={mydoc.pdfurl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
