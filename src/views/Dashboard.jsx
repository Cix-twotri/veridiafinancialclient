import React, { useEffect, useState, useRef, useContext } from "react";
import SimpleFooter from "../components/Footers/SimpleFooter.jsx";
import { FaPlus } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import {
  MainCont,
  CardCont,
  ProfileAddiconCont,
  ProfileCont,
  Profileimage,
  AddiconCont,
  BalanceAmountCont,
  Span,
  DollarsAmountCont,
  Dollars,
  Amount,
  TwoDivCont,
  DivOne,
  DivTwo,
  DisplayamountCont,
  StyledSelect,
  ActiveMainCont,
  Activetext,
  MainContTwo,
  LimitAmountCont,
  AccoutSpan,
  AmountSpan,
  DomesticWireTfCont,
  DomesticTf,
  WireTf,
  MainContThree,
  Recenttransactiontxt,
  RTAmountSpan,
  RTTypeSpan,
  RTDescription,
  RTTDateSpan,
  TimeSpan,
} from "../styles/Dashboard.styles";
import { AuthContext } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { makeRequest } from "../axios";

const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState(""); // Initialize with an empty string
  const [selectedOption2, setSelectedOption2] = useState(""); // Initialize with an empty string
  const { currentUser } = useContext(AuthContext);
  const [optionAmounts] = useState({
    MyLoan: 33433,
    LastDebit: 38838838,
    TotalExpense: 3838838838,
  });
  const [optionAmounts2] = useState({
    Panding: 11111,
    LastCredited: 222222222,
    TotalIncome: 3333333333,
  });
  const navigate = useNavigate();
  const mainRef = useRef(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;

    if (currentUser) {
      const fetchCards = async () => {
        try {
          const response = await makeRequest.get("/cards/recent");
          setCards(response.data);
        } catch (error) {
          console.error("Error fetching cards:", error);
        }
      };

      fetchCards();
    }
  }, [currentUser]);

  if (!currentUser) {
    return <div>Please log in to see your cards.</div>;
  }

  const formatNaira = (amount) => {
    return `₦${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };


  const handleSelect1 = (e) => {
    setSelectedOption1(e.target.value);
  };

  const handleSelect2 = (e) => {
    setSelectedOption2(e.target.value);
  };

  return (
    <>
      <main className="profile-page" ref={mainRef}>
        <section className="section-profile-cover section-shaped my-0">
          {/* Circles background */}
          <div className="shape shape-style-1 shape-default alpha-4">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          {/* SVG separator */}
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
          <MainCont>
            <CardCont>
              <ProfileAddiconCont>
                <ProfileCont>
                  <Link to={`/profile/${currentUser.id}`}>
                    <Profileimage
                      src={"/upload/" + currentUser.profilePic}
                      alt=""
                    />
                  </Link>

                  <span>{currentUser.name}</span>
                </ProfileCont>
                <AddiconCont>
                  <FaPlus />
                </AddiconCont>
              </ProfileAddiconCont>

              <BalanceAmountCont>
                <Span>Balance:</Span>
                <DollarsAmountCont>
                  <Dollars>$</Dollars>
                  <Amount>474774747</Amount>
                </DollarsAmountCont>
              </BalanceAmountCont>

              <TwoDivCont>
                <DivOne>
                  <StyledSelect onChange={handleSelect1}>
                    <option value="MyLoan">My Loan</option>
                    <option value="LastDebit">Last Debit</option>
                    <option value="TotalExpense">Total Expense</option>
                  </StyledSelect>
                  <DisplayamountCont>
                    ${optionAmounts[selectedOption1]}
                  </DisplayamountCont>
                </DivOne>

                <DivTwo>
                  <StyledSelect onChange={handleSelect2}>
                    <option value="Panding">Panding</option>
                    <option value="LastCredited">Last Credited</option>
                    <option value="TotalIncome">Total Income</option>
                  </StyledSelect>
                  <DisplayamountCont>
                    ${optionAmounts2[selectedOption2]}
                  </DisplayamountCont>
                </DivTwo>
              </TwoDivCont>
            </CardCont>
          </MainCont>
        </section>
        <ActiveMainCont>
          
          <Activetext>Active</Activetext>
          <MainContTwo>
            <LimitAmountCont>
              <AccoutSpan>Account Limit</AccoutSpan>
              <AmountSpan>$4884484</AmountSpan>
            </LimitAmountCont>

            <LimitAmountCont>
              <AccoutSpan>Recent Transaction</AccoutSpan>
              <AmountSpan>$838877</AmountSpan>
            </LimitAmountCont>

            <LimitAmountCont>
              <AccoutSpan>Last Login</AccoutSpan>
              <AmountSpan>2024-38-34</AmountSpan>
            </LimitAmountCont>

            <DomesticWireTfCont>
              <DomesticTf>Domestic Transfer</DomesticTf>
              <WireTf>Wire Transfer</WireTf>
            </DomesticWireTfCont>
          </MainContTwo>

          <MainContThree>
            <Recenttransactiontxt>Recent Transection</Recenttransactiontxt>
            <LimitAmountCont>
              <RTAmountSpan>Amount</RTAmountSpan>
              <AmountSpan>$4884484</AmountSpan>
            </LimitAmountCont>

            <LimitAmountCont>
              <RTTypeSpan>Type</RTTypeSpan>
              <AccoutSpan>Cash Transfer</AccoutSpan>
            </LimitAmountCont>

            <LimitAmountCont>
              <RTDescription>Description</RTDescription>
              <AmountSpan>Payout</AmountSpan>
            </LimitAmountCont>

            <LimitAmountCont>
              <RTTDateSpan>Date</RTTDateSpan>
              <AmountSpan>2024-04-31</AmountSpan>
            </LimitAmountCont>

            <LimitAmountCont>
              <TimeSpan>Time</TimeSpan>
              <AmountSpan>23:44</AmountSpan>
            </LimitAmountCont>
          </MainContThree>
        </ActiveMainCont>
        <section className="section"></section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default Dashboard;
