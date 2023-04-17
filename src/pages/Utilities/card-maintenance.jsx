import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const CardMaintenance = ({ children }) => {
  return (
    <React.Fragment>
      <Col md="4">
        <Card className="mt-4 maintenance-box">
          <CardBody>{children}</CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default CardMaintenance;
