import React, { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";

import "./Card.css";

const CardType = ({ Name, List, url }) => {
  return (
    <a className="link" href={url}>
      <Row>
        <div className="col mb-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20">{Name}</h6>
              <a href={url}>
                <div className="btn btn-primary m-1 f-right"> Apply </div>
              </a>
              <h2 className="text-right">
                <i className="fa fa-cart-plus f-left"></i>
                <span>{`${List.length}`}</span>
              </h2>
              <p className="m-b-0">
                Applied<span className="f-right">0</span>
              </p>
            </div>
          </div>
        </div>
      </Row>
    </a>
  );
};
export default CardType;
