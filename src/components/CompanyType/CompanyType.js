import CardType from "../Card/Card";
import SVG from "../SVG/SVG";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../Heading/Heading";

import "./CompanyType.css";

const CompanyType = ({ types }) => {
  return (
    <div className="container">
      <div className="mt-5 d-flex justify-content-center">
        <div className="head">Company List</div>
      </div>
      <div className="types d-flex justify-content-center">
        <Row>
          {types.map((id) => (
            <Col md={4} className="p-4">
              <CardType Name={id.Type} List={id.list} url={id.url} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default CompanyType;
