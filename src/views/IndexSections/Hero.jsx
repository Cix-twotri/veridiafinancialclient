/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import OpeDoor from "../../assets/img/icons/opeDoor.png";
import Rocket from "../../assets/img/icons/rocket.png";
import { Link } from "react-router-dom";
import ArgonWhite from "../../assets/img/brand/argon-react-white.png";
import Creativetim from "../../assets/img/brand/creativetim-white-slim.png";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={ArgonWhite}
                      style={{ width: "200px" }}
                    />
                    <p className="lead text-white">
                      Unlock Financial Freedom: Open Your Account Today and
                      Experience Hassle-Free Banking!
                    </p>
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        size="lg"
                      >
                        <Link to="/register-page">
                          <span className="btn-inner--icon mr-1">
                            <img
                              className="ni ni-cloud-download-95"
                              src={OpeDoor}
                              alt="Open Door"
                            />
                          </span>
                          <span className="btn-inner--text">
                            Open an Account
                          </span>
                        </Link>
                      </Button>
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        size="lg"
                        target="_blank"
                      >
                        <Link to="/login-page">
                          {/* Make sure to use the correct path */}
                          <span className="btn-inner--icon mr-1">
                            <img
                              className="ni ni-cloud-download-95"
                              src={Rocket} // Assuming Rocket is an imported image
                              alt="Open Door"
                            />
                          </span>
                          <span className="btn-inner--text">
                            <span className="text-warning mr-1">
                              Learn More
                            </span>
                            / Get Started
                          </span>
                        </Link>
                      </Button>
                    </div>
                    <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                        *proudly coded by
                      </small>
                      <img
                        alt="..."
                        className="ml-1"
                        style={{ height: "28px" }}
                        src={Creativetim}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
