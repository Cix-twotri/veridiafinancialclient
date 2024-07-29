import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { HiMiniBanknotes } from "react-icons/hi2";
import { GiPayMoney } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiPersonSimpleThrowBold } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbFolder } from "react-icons/tb";
import styled from "styled-components";
import { AuthContext } from "../../context/authContext.jsx";
import ArgonWhite from "../../assets/img/brand/argon-react-white.png";
import Argon from "../../assets/img/brand/argon-react.png";
import Creativetim from "../../assets/img/brand/creativetim-white-slim.png";

const StyledLink = styled(Link)`
  text-decoration: none;
  border-radius: 50px;
  width: 200px;
  padding: 5px;
  height: 30px;
  color: black;
  background-color: transparent;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #1cc0b3;
    color: white;
  }
`;

const OnlineDepositIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const DemoNavbar = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, []);

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };

  return (
    <>
    <Navbar />
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img
                alt="..."
                src={ArgonWhite}
              />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={Argon}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>

              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    id="tooltip333589074"
                    target="_blank"
                  >
                    <StyledLink to="/dashboad-page">
                      <LuLayoutDashboard className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        DashBoard
                      </span>
                    </StyledLink>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip333589074">
                    Dashboard
                  </UncontrolledTooltip>
                </NavItem>

                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    id="tooltip356693867"
                    target="_blank"
                  >
                    <StyledLink to="/online-deposit">
                      <HiMiniBanknotes className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Online Deposit
                      </span>
                    </StyledLink>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip356693867">
                    Deposit
                  </UncontrolledTooltip>
                </NavItem>

                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    id="tooltip184698705"
                    target="_blank"
                  >
                    <StyledLink to="/transfer">
                      <GiPayMoney className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Domestic Transfer
                      </span>
                    </StyledLink>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip184698705">
                    Transfer
                  </UncontrolledTooltip>
                </NavItem>

                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    id="tooltip184698705"
                    target="_blank"
                  >
                    <StyledLink to="/transaction">
                      <TbFolder className="fa fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        All Transaction & Logs
                      </span>
                    </StyledLink>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip184698705">
                    Transactions
                  </UncontrolledTooltip>
                </NavItem>

                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    id="tooltip112445449"
                    target="_blank"
                  >
                    <StyledLink to="/withdraw">
                      <BiMoneyWithdraw className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Withdraw
                      </span>
                    </StyledLink>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip112445449">
                    Withdraw
                  </UncontrolledTooltip>
                </NavItem>

                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    id="tooltip112445449"
                    target="_blank"
                  >
                    <StyledLink to={`/profile/${currentUser.id}`}>
                      <PiPersonSimpleThrowBold className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Profile
                      </span>
                    </StyledLink>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip112445449">
                    Profile
                  </UncontrolledTooltip>
                </NavItem>

                <NavItem className="d-none d-lg-block ml-lg-4">
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-cloud-download mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">
                      Download
                    </span>
                  </Button>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default DemoNavbar;
