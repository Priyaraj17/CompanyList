import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Card.css";

let totalSolved = 0;
let questionsRemainig = 0;
let totalQuestions = 0;

const CardType = ({ type }) => {
  return (
    <div className="col mb-3">
      <Card className="mb-3 inprogress-card animate__slideInDown hvr-grow">
        <Card.Body>
          <Row>
            <Col>
              <Card.Title className="topicName">"Hello"</Card.Title>
            </Col>
            <Col>
              <h4>
                <Badge
                  pill
                  variant="success"
                  className="float-right"
                  style={{ fontWeight: "500", cursor: "pointer" }}
                >
                  {questionsRemainig === 0 ? "Done 👏🏻" : "Solve Now 🙇🏻‍♂️"}
                </Badge>
              </h4>
            </Col>
          </Row>
          <Card.Text className="totalQuestion">
            Total Questions <br />
            {`${questionsRemainig}`} More to go
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default CardType;
