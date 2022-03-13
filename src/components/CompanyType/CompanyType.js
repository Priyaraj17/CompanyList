import CardType from "../Card/Card";

import { Container, Row, Col } from "react-bootstrap";

const CompanyType = ({ types }) => {
  return (
    <Container>
      <div className="display-1 mb-5">Company List</div>
      <Row>
        {types.map((id) => (
          <Col md={4}>
            <CardType Name={id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CompanyType;
