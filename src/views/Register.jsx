// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Navbar2 from "../components/Navbars/Navbar2";
import SimpleFooter from "../components/Footers/SimpleFooter.jsx";
import VeridienLogo from "../assets/img/brand/argon-react.png";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../SupabaseClient.js";
import { createClient } from "@supabase/supabase-js";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";

const Image = styled.img`
  width: 200px;
  height: 50px;
`;


const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    fullname: "",
  });

  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const mainRef = useRef(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: inputs.email,
        password: inputs.password,
        options: {
          data: {
            full_name: inputs.fullname,
          },
        },
      });
      alert("Check your email for verification link");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <Navbar2 />
      <main ref={mainRef}>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <div className="text-muted text-center mb-3">
                    <small>Veridan Finincial</small>
                  </div>
                  <CardHeader className="bg-white pb-5">
                    <Image src={VeridienLogo} alt="Veridian Logo" />
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <Auth
                      supabaseClient={supabase}
                      appearance={{ theme: ThemeSupa }}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default Register;
