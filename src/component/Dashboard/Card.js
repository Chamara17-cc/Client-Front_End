import React from "react";
import "./Card.css";

function Card({ data }) {
  return (
    <div className="col-md-4 newstyle">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
