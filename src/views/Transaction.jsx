import React, { useEffect, useState, useRef } from "react";
import {
  MainCont,
  LimitAmountCont,
  AccoutSpan,
  AmountSpan,
  MainContThree,
  Recenttransactiontxt,
  RTAmountSpan,
  RTTypeSpan,
  RTDescription,
  RTTDateSpan,
  TimeSpan,
} from "../styles/Transaction.styles";
import backgroundImage from "../assets/img/theme/transactionBg.jpg";
import styled from "styled-components";

const BackgroundImage = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding-left: 5px; /* Add any other styles you need */
  padding-right: 5px; /* Add any other styles you need */
  padding-top: 100px; /* Add any other styles you need */
`;

const Transaction = () => {
  return (
    <>
      <BackgroundImage>
        <MainCont>
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
        </MainCont>
      </BackgroundImage>
    </>
  );
};

export default Transaction;
