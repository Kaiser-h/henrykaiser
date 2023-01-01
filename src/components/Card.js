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
  {/* <Card style={{ width: "18rem"}}>
      <Card.Img variant="top" src={props.imageurl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button
          variant="primary"
          onClick={() =>
            navigate("viewdoc", { state: { pdfurl: props.pdfurl } })
          }
        >
          View Project
        </Button>
      </Card.Body>
    </Card> */}
    </div>
  );
}

export default MyCard;
