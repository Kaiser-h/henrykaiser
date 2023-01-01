import React from "react";
import { useNavigate } from "react-router-dom";

function MyCard(props) {
  const navigate = useNavigate();
  return (
    <div>
    <div className="card h-100">
      <img src={props.imageurl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h6 className="card-title">{props.title}</h6>
        <button type="button" className="btn btn-dark btncolor" onClick={() =>
            navigate(`${props.pdfName}`, { state: { pdfName: props.pdfName } })
          }>View Project</button>
      </div>
    </div>
    </div>
  );
}

export default MyCard;
