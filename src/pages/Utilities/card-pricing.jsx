import React from "react";
import { Button, Card, CardBody, Col } from "reactstrap";

const CardPricing = ({ pricing }) => {
  return (
    <React.Fragment>
      <Col xl="3" md="6">
        <Card className="plan-box">
          <CardBody className="p-4">
            <div className="d-flex">
              <div className="flex-grow-1">
                <h5>{pricing.title}</h5>
                <p className="text-muted">{pricing.description}</p>
              </div>
              <div className="ms-3">
                <i className={"bx " + pricing.icon + " h1 text-primary"} />
              </div>
            </div>
            <div className="py-4">
              <h2>
                <sup>
                  <small>$</small>
                </sup>{" "}
                {pricing.price}/{" "}
                <span className="font-size-13">{pricing.duration}</span>
              </h2>
            </div>
            <div className="text-center">
              <Button
                to={pricing.link}
                color="primary"
                className="btn btn-primary btn-sm"
              >
                Sign up Now
              </Button>
            </div>

            <div className="plan-features mt-5">
              {pricing.features.map((feature, key) => (
                <p key={"_feature_" + key}>
                  <i className="bx bx-checkbox-square text-primary me-2" />{" "}
                  {feature.title}
                </p>
              ))}
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default CardPricing;
