import React from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import { BiLogoVisa } from "react-icons/bi";
import { Button } from "reactstrap";

const CardContainerz = styled.div`
  width: 280px;
  height: 180px;
  background-color: darkgray;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  gap: 10px;
`;

const CardNumber = styled.div`
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 2px;
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const CardName = styled.div`
  font-size: 16px;
`;

const ExpiryDate = styled.div`
  font-size: 16px;
`;

const CheckIconCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckIconCont2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const CheckIcon = styled(FaCheckCircle)`
  color: green;
  font-size: 24px;
`;

const Number = styled.div`
  font-weight: 500;
  font-size: 17px;
  color: white;
  letter-spacing: 3px;
  padding-top: 15px;
`;

const CreditCard = () => {
  return (
    <CardContainerz>
      <CheckIconCont>
        <BiLogoVisa size={55} />
        <CheckIcon />
      </CheckIconCont>

      <CheckIconCont2>
        <CardNumber>.... .... .... </CardNumber>
        <Number>7982</Number>
      </CheckIconCont2>
      <CardDetails>
        <CardName>John Doe</CardName>
        <ExpiryDate>12/24</ExpiryDate>
      </CardDetails>

      <Button color="info" size="">
        SEND MY REQUEST
      </Button>

      <Button>CENCEL</Button>
    </CardContainerz>
  );
};

export default CreditCard;
