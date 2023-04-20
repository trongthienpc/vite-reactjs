import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

//Import Images
import logo from "../../assets/images/logo-dark.png";
import maintenance from "../../assets/images/coming-soon.svg";
import Countdown from "react-countdown";

const PageComingSoon = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>You are good to go!</span>;
    } else {
      // Render a countdown
      return (
        <>
          <div className="coming-box">
            {days} <span>Days</span>
          </div>{" "}
          <div className="coming-box">
            {hours} <span>Hours</span>
          </div>{" "}
          <div className="coming-box">
            {minutes} <span>Minutes</span>
          </div>{" "}
          <div className="coming-box">
            {seconds} <span>Seconds</span>
          </div>
        </>
      );
    }
  };
  //meta title
  document.title = "Coming Soon | Vite React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className="home-btn d-none d-sm-block">
            <Link to="/" className="text-white">
              <i className="fas fa-home h2" />
            </Link>
          </div>
          <div className="my-5 pt-sm-5">
            <Row>
              <Col lg="12">
                <div className="text-center">
                  <Link to="/">
                    <img src={logo} alt="" height="20" />
                  </Link>
                  <Row className="justify-content-center mt-5">
                    <Col sm="4">
                      <div className="maintenance-img">
                        <img
                          src={maintenance}
                          alt=""
                          className="img-fluid mx-auto d-block"
                        />
                      </div>
                    </Col>
                  </Row>
                  <h4 className="mt-5">
                    Let&#39;s get started with Vite React
                  </h4>
                  <p className="text-muted">
                    It will be as simple as Occidental in fact it will be
                    Occidental.
                  </p>

                  <Row className="justify-content-center mt-5">
                    <Col md="8">
                      <div className="counter-number">
                        <Countdown
                          date="2021/12/31"
                          className="counter-number"
                          renderer={renderer}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default PageComingSoon;
