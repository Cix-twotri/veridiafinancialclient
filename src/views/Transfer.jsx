import React, { useEffect, useRef, useState } from "react";
import { Button, Input, FormGroup } from "reactstrap";
import { IoIosArrowDown } from "react-icons/io";
import ArrowUpdownImg from "../assets/img/icons/arrowUpdown.png";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
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
} from "../styles/Transfer.styles.jsx";
import { Form, Label } from "../styles/Deposit.styles";
import { Spacer } from "../styles/Deposit.styles";

const Transfer = () => {
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
      <main className="profile-page" ref={mainRef}>
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
          <YourBalanceIcon>
            <YourBalance>YOUR BALANCE</YourBalance>
            <IconYourBalance>
              <YourBalanceAmount>$26,366.63</YourBalanceAmount>
              <PiDotsThreeOutlineVerticalFill color="#5954c5" />
            </IconYourBalance>
          </YourBalanceIcon>

          <DepositCont>
            <Subcont>
              <DepositSubCont>
                <Deposittext>TRANSFER</Deposittext>
                <Deposittext>
                  <IoIosArrowDown color="#5954c5" size={15} />
                </Deposittext>
              </DepositSubCont>

              <Deposittext>
                <ArrowUpdown src={ArrowUpdownImg} alt="Arrow Up Down" />
              </Deposittext>
            </Subcont>

            <Chooseyouamount>CHOOSE YOUR AMOUNT</Chooseyouamount>
            <AmountboxCont>
              <Amountbox onClick={() => handleAmountChange("$500")}>
                $500
              </Amountbox>
              <Amountbox onClick={() => handleAmountChange("$250")}>
                $250
              </Amountbox>
            </AmountboxCont>
            <AmountboxCont>
              <Amountbox onClick={() => handleAmountChange("$100")}>
                $100
              </Amountbox>
              <Amountbox onClick={() => handleAmountChange("$50")}>
                $50
              </Amountbox>
            </AmountboxCont>

            <EnterAmount>ENTER AMOUNT</EnterAmount>
            <FormGroup>
              <Input
                id="exampleNumber"
                name="number"
                placeholder="Enter Amount"
                type="text"
                value={`$${amount}`}
                onChange={handleInputChange}
              />
            </FormGroup>
            <Form onSubmit={handleSubmit}>
              <EnterAmount>RECIPIENT ACCOUNT</EnterAmount>
              <Input
                type="text"
                id="cardNumber"
                placeholder="Enter Account Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <EnterAmount>BANK</EnterAmount>
              <Input
                type="text"
                id="cardName"
                placeholder="Recipient Bank"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
              <Spacer />
              <Button color="primary" type="submit">
                SUBMIT
              </Button>
              <Spacer />
              <Button>CANCEL</Button>
            </Form>
          </DepositCont>
        </MainCont>
      </main>
    </>
  );
};

export default Transfer;
