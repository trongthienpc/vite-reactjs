import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card, CardBody, Col, Container, Label, Row } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import profileImg from "../../assets/images/profile-img.png";
import logoImg from "../../assets/images/logo.svg";

function Register({ apiError, registerUser, registerUserFailed }) {
  const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
  });

  useEffect(() => {
    // apiError("");
    // registerUserFailed("");
  }, []);

  const initialValues = {
    email: state.email,
    password: state.password,
    username: state.username,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Please Enter Your Email"),
    password: Yup.string().required("Please Enter Valid Password"),
    username: Yup.string().required("Please Enter Valid Username"),
  });

  const handleSubmit = (values) => {
    registerUser(values);
  };

  return (
    <>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="bx bx-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Free Register</h5>
                        <p>Get your free Skote account now.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profileImg} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logoImg}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <Formik
                      enableReinitialize={true}
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({ errors, status, touched }) => (
                        <Form className="form-horizontal">
                          <div className="mb-3">
                            <Label for="email" className="form-label">
                              Email
                            </Label>
                            <Field
                              name="email"
                              type="email"
                              className={
                                "form-control" +
                                (errors.email && touched.email
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mb-3">
                            <Label for="email" className="form-label">
                              Username
                            </Label>
                            <Field
                              name="email"
                              type="email"
                              className={
                                "form-control" +
                                (errors.email && touched.email
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mb-3">
                            <Label for="email" className="form-label">
                              Password
                            </Label>
                            <Field
                              name="email"
                              type="email"
                              className={
                                "form-control" +
                                (errors.email && touched.email
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mt-4 d-grid">
                            <button
                              className="btn btn-primary btn-block"
                              type="submit"
                            >
                              Register
                            </button>
                          </div>

                          <div className="mt-4 text-center">
                            <p className="mb-0">
                              By registering you agree with our{" "}
                              <Link to="#" className="text-primary">
                                Terms of Use
                              </Link>
                            </p>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Already have an account ?{" "}
                  <Link to="/login" className="fw-medium text-primary">
                    {" "}
                    Login
                  </Link>{" "}
                </p>
                <p>© {new Date().getFullYear()} Custom by @David John</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Register;
