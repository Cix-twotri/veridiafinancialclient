import React, { useEffect, useRef, useState } from "react";
import {
  Input,
  FormGroup,
  Button,
  Container,
  Row,
  Col,
  Badge,
  CardImg,
} from "reactstrap";
import {
  MainCont,
  YourBalanceIcon,
  YourBalanceAmount,
  YourBalance,
  IconYourBalance,
  DepositCont,
  Deposittext,
  Subcont,
  DepositSubCont,
  ArrowUpdown,
  Chooseyouamount,
  AmountboxCont,
  Amountbox,
  EnterAmount,
} from "../styles/Home.styles";

import OnlinePayment from "../assets/img/icons/creditCard.png";
import CreditCardPng from "../assets/img/icons/onlinePayment.png";
import Security from "../assets/img/icons/security.png";
import AwesomeImg from "../assets/img/icons/awesome.png";
import Team from "../assets/img/icons/team.jpg";
import Tree from "../assets/img/icons/tree.png";
import Restaurant from "../assets/img/icons/restaurant.png";
import Team1 from "../assets/img/icons/team1.jpg";
import Water from "../assets/img/icons/water.png";
import HomePng from "../assets/img/icons/home.png";
import SvgOne from "../assets/img/ill/ill-2.svg";
import Bankrate from "../assets/img/ill/bankrate.svg";
import Nerdwallet from "../assets/img/ill/nerdwallet.svg";
import Smartasset from "../assets/img/ill/smartasset.svg";

import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import CreditCard from "../components/creditCard/CredidCard";
import ArrowUpdownImg from "../assets/img/icons/arrowUpdown.png";
import Hero from "../views/IndexSections/Hero.jsx";
import Navbar2 from "../components/Navbars/Navbar2.jsx";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Text,
} from "@chakra-ui/react";
import styled from "styled-components";
import CardsFooter from "../components/Footers/CardsFooter.jsx";

const Image = styled.img`
  width: 110px;
  height: 200px;
  margin-left: 30px;
`;
const Image2 = styled.img`
  width: 200px;
  height: 200px;
  margin-left: 30px;
`;

const Image3 = styled.img`
  width: 110px;
  height: 110px;
  margin-left: 70px;
`;

const Image4 = styled.img`
  width: 400px;
  height: 350px;
  border-radius: 10px;
`;

const Image5 = styled.img`
  width: 110px;
  height: 110px;
`;

const Awesome = styled.img`
  width: 110px;
  height: 110px;
  margin-left: 50px;
`;

const Home = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  const mainRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ cardNumber, cardName, expiryDate, cvv });
  };

  const handleAmountChange = (newValue) => {
    setAmount(newValue.replace(/^\$/, ""));
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/^\$/, "");
    setAmount(value);
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <>
      <Navbar2 />
      <main className="profile-page" ref={mainRef}>
        <Hero />
        <section className="section-profile-cover section-shaped my-0">
          <div className="shape shape-style-1 shape-default alpha-4">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>

        <MainCont>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card>
              <CardHeader>
                <div className=" mb-4">
                  <Image3
                    className="ni ni-check-bold"
                    src={OnlinePayment}
                    alt="Online Payment"
                  />
                </div>
                <Heading size="md"> Digital Payment</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  With our cutting-edge digital payment interfaces, managing
                  your finances has never been easier.....
                </Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Image
                    className="ni ni-check-bold"
                    src={CreditCardPng}
                    alt="Online Payment"
                  />
                </div>
                <Heading size="md"> Loans & Credit Card</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  At Veridian Financial, we understand that life’s milestones
                  demand financial support. Our loans empower you
                </Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className=" mb-4">
                  <Image3
                    className="ni ni-planet"
                    src={Security}
                    alt="Online Payment"
                  />
                </div>
                <Heading size="md">Security</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  We safeguards your assets as our top priority with our
                  real-time fraud monitoring.....
                </Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
          </SimpleGrid>

          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="6">
                <Image4 alt="..." className="img-fluid floating" src={Team} />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                    <Awesome
                      src={AwesomeImg}
                      alt="Awesome Image"
                      className="ni ni-settings-gear-65"
                    />
                  </div>
                  <h3>Awesome features</h3>
                  <p>
                    Bank confidently with Veridian Financial—secure, intuitive,
                    and globally accessible!
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-settings-gear-65" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Instant Account Setup</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-html5" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Smart Budgeting Tool</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-satisfied" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Super friendly support team</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>

          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg alt="..." src={Team1} top />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Banking With A Mission
                      </h4>
                      <p className="lead text-italic text-white">
                        Our purpose-driven approach empowers customers, fosters
                        financial inclusion, and supports positive change. Join
                        us in shaping a better banking experience.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Expect more </h3>
                    <p className="lead">
                      Where competitive rates meet easy online banking, and our
                      heart is dedicated to exceptional customer service,
                      innovation, and your financial well-being.
                    </p>
                    <p>
                      Veridian Financial is raising the bar. If you’ve found your
                      way to Veridian Financial for our highly competitive rates
                      and easy-to-use online banking
                    </p>
                    <p>
                      we invite you to stay for everything else that makes us a
                      digital bank with a heart: great customer service,
                      constant innovation, and a team that’s always working to
                      make banking better for you.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Secure Banking for Strategic Financial Impact
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={SvgOne}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">
                        Friendly Interface
                      </h4>
                      <p className="text-white">
                        Veridian Financial’s user-friendly interface ensures
                        effortless navigation, making banking a delightful
                        experience for all our customers
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Awesome Support
                          </h5>
                          <p>
                            Veridiann Financial: Our friendly support team is
                            here 24/7, ready to assist you with any banking
                            needs. Your satisfaction is our priority!” 🌟🤝
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Modular Banking
                          </h5>
                          <p>
                            Veridian Financial: Tailor your banking experience
                            with our modular approach—choose the services you
                            need, seamlessly integrated for personalized
                            financial solutions.
                          </p>
                          <a
                            className="text-warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
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

          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">
                    Community Roots & National Impact
                  </h2>
                  <p className="lead text-muted">
                    At Veridian Financial, we aim to make an impact across the
                    country and give back in the form of meals for the hungry,
                    shelter for the needy, and trees for everyone. We also honor
                    our roots as a community bank by contributing to national
                    and local organizations.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={Tree}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Agriculture</span>
                        <small className="h6 text-muted">+200 farmers</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={Restaurant}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Foods</span>
                        <small className="h6 text-muted">
                          30,583 million People
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={Water}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Water</span>
                        <small className="h6 text-muted">
                          500,323k Refugee
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={HomePng}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Shelters</span>
                        <small className="h6 text-muted">10,032k Refugee</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="success"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                        Simplifying Banking for You
                      </h3>
                      <p className="lead text-white mt-3">
                        Join us and be part of a company poised to achieve
                        billions in value. We understand your needs and embrace
                        a culture of innovation
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        size="lg"
                      >
                        Read More
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>

          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Top-Rated Banking</h2>
                  <p className="lead text-white">
                    Start banking with the best: Ally Bank. Top-rated for its
                    high APYs, no fees, and convenient digital access. Your
                    financial journey begins here!
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div>
                    <Image5
                      alt="..."
                      src={Bankrate}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col lg="4">
                  <Image5
                    alt="..."
                    src={Nerdwallet}
                    style={{ width: "200px" }}
                  />
                </Col>
                <Col lg="4">
                  <Image5
                    alt="..."
                    src={Smartasset}
                    style={{ width: "200px" }}
                  />
                </Col>
              </Row>
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

          <CardsFooter />
        </MainCont>
      </main>
    </>
  );
};

export default Home;
