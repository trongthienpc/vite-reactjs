import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  apiError,
  registerUser,
  registerUserFailed,
} from "../redux/actions";
import {
  Card,
  CardBody,
  Col,
  Container,
  Label,
  Row,
} from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import profileImg from "../assets/images/profile-img.png";
import logoImg from "../assets/images/logo.svg";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = { email, password, username };
    props.registerUser(values);
  };
  return (
    <>
    
    </>
  )
}