import React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Label,
  Button,
  Alert,
} from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

import avatar from "../../assets/images/users/avatar-1.jpg";

const UserProfile = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [idx, setIdx] = useState(1);
  const errorProps = props.error;
  const successProps = props.success;

  //   useEffect(() => {
  //     if (localStorage.getItem("authUser")) {
  //       const obj = JSON.parse(localStorage.getItem("authUser"));
  //       if (import.meta.env.VITE_APP_DEFAULTAUTH === "firebase") {
  //         setName(obj.displayName);
  //         setEmail(obj.email);
  //         setIdx(obj.uid);
  //       } else if (
  //         import.meta.env.VITE_APP_DEFAULTAUTH === "fake" ||
  //         import.meta.env.VITE_APP_DEFAULTAUTH === "jwt"
  //       ) {
  //         setName(obj.username);
  //         setEmail(obj.email);
  //         setIdx(obj.uid);
  //       }
  //     }
  //   }, []);

  //   useEffect(() => {
  //     if (props !== prevProps) {
  //       const obj = JSON.parse(localStorage.getItem("authUser"));
  //       if (import.meta.env.VITE_APP_DEFAULTAUTH === "firebase") {
  //         setName(obj.displayName);
  //         setEmail(obj.email);
  //         setIdx(obj.uid);
  //       } else if (
  //         import.meta.env.VITE_APP_DEFAULTAUTH === "fake" ||
  //         import.meta.env.VITE_APP_DEFAULTAUTH === "jwt"
  //       ) {
  //         setName(obj.username);
  //         setEmail(obj.email);
  //         setIdx(obj.uid);
  //       }
  //       setTimeout(() => {
  //         props.resetProfileFlag();
  //       }, 3000);
  //     }
  //   }, [props]);

  const onSubmit = (values) => {
    props.editProfile(values);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb title="Skote" breadcrumbItem="Profile" />

          <Row>
            <Col lg="12">
              {errorProps ? <Alert color="danger">{props.error}</Alert> : null}
              {successProps ? (
                <Alert color="success">{props.success}</Alert>
              ) : null}

              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="me-3">
                      <img
                        src={avatar}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="align-self-center flex-1">
                      <div className="text-muted">
                        <h5>{name}</h5>
                        <p className="mb-1">{email}</p>
                        <p className="mb-0">Id no: #{idx}</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <h4 className="card-title mb-4">Change User Name</h4>

          <Card>
            <CardBody>
              <Formik
                enableReinitialize={true}
                initialValues={{
                  username: name || "",
                  idx: idx || "",
                }}
                validationSchema={Yup.object().shape({
                  username: Yup.string().required("Please Enter Your Username"),
                })}
                onSubmit={(values) => {
                  props.editProfile(values);
                }}
              >
                {({ errors, status, touched }) => (
                  <Form className="form-horizontal">
                    <div className="mb-3">
                      <Label for="username" className="form-label">
                        Username
                      </Label>
                      <Field
                        name="username"
                        type="text"
                        className={
                          "form-control" +
                          (errors.username && touched.username
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="invalid-feedback"
                      />
                      <Field
                        name="idx"
                        type="hidden"
                        className={
                          "form-control" +
                          (errors.idx && touched.idx ? " is-invalid" : "")
                        }
                      />
                    </div>
                    <div className="text-center mt-4">
                      <Button type="submit" color="danger">
                        Update User Name
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;
