import styled from "styled-components";

export const sizes = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

export const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const MainCont = styled.div`
  position: absolute;
  color: white;
  width: 100%;
  height: 500px;
  top: 25%;
  /* Apply styles only for screens wider than tablet size */
  @media ${devices.tablet} {
    padding-left: 15px;
    padding-right: 15px;
    top: 30%;
    width: 100%;
    height: 200px;
    color: white;
  }

  @media ${devices.mobile} {
    padding-left: 4px;
    padding-right: 4px;
    height: 500px;
    color: white;
  }
`;

export const CardCont = styled.div`
  background: linear-gradient(rgba(10, 34, 0, 11), transparent);
  background-color: #3484bd;
  color: white;
  border-radius: 10px;
  margin-top: 10px;
  width: 100%;
  height: 40%;

  @media ${devices.tablet} {
    padding-left: 15px;
    padding-right: 15px;
  }

  @media ${devices.mobile} {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const ProfileAddiconCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;

  @media ${devices.tablet} {
  }
  @media ${devices.mobile} {
    padding-top: 20px;
    padding-right: 20px;
    padding-left: 16px;
  }
`;

export const ProfileCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  padding: 0px 5px;
  width: auto;
  height: 40px;
  gap: 5px;

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
    padding-left: 3px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    height: 35px;
  }
`;

export const Span = styled.div`
  font-size: 15px;
  font-weight: 100;
  color: lightgray;
`;

export const Profileimage = styled.div`
  border-radius: 50%;
  border: 10px solid #0074d9; /* Add a blue border */
  width: 40px;
  height: 40px;
  padding-left: 5px;
  transition: transform 0.3s ease; /* Add a smooth transition effect */

  &:hover {
    transform: scale(1.2); /* Zoom in on hover */
  }

  @media ${devices.tablet} {
    width: 30px;
    height: 30px;
    border: 2px solid #0074d9; /* Adjust border for tablets */
  }

  @media ${devices.mobile} {
    padding: 0px 5px;
    width: 30px;
    height: 30px;
    border: 1px solid #0074d9; /* Adjust border for tablets */
  }
`;

export const AddiconCont = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 40px;
  height: 40px;
  padding: 7px 13px;

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
    border-radius: 4px;
    width: 27px;
    height: 27px;
    padding: 0px 5px;
  }
`;

export const BalanceAmountCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  width: auto;
  height: 40px;
  padding: 7px 13px;
  margin-top: 30px;

  @media ${devices.tablet} {
  }
`;

export const BalanceText = styled.div`
  font-size: 18px;

  font-size: ;

  @media ${devices.tablet} {
  }
`;

export const DollarsAmountCont = styled.div`
  display: flex;

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;
export const Dollars = styled.div`
  font-size: 20px;
  font-weight: 100;
  color: lightgray;
`;

export const Amount = styled.div`
  font-size: 20px;
  font-weight: 700;

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
    font-weight: 500;
  }
`;

export const TwoDivCont = styled.div`
  display: flex;
  padding: 5px 10px;
  margin-top: 20px;
  gap: 15px;
  width: auto;
  height: 120px;

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

export const DivOne = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 80px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

export const DivTwo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 80px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

export const DisplayamountCont = styled.div`
  display: flex;
  background-color: Lightgray;
  color: black;
  width: auto;
  height: 30px;
  border-radius: 10px;
  padding-left: 20px;
  padding-top: 3px;
  margin: 10px;
  font-size: 15px;

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

// Define your styled components
export const StyledSelect = styled.select`
  width: 100%;
  height: 35px;
  color: gray;
  font-size: 14px;
  border: none;
  border-radius: 20px;
  margin-right: -8px;
  margin-left: -8px;

  /* Style the dropdown options */
  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const ActiveMainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  color: black;
  padding-top: 5px;

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

export const Activetext = styled.div`
  background-color: #23c390;
  width: 100px;
  height: 30px;
  color: white;
  font-size: 15px;
  padding-left: 30px;
  padding-top: 3px;
  border-radius: 5px;

  &:hover {
    transform: scale(1.05); /* Adjust the scale factor as needed */
  }

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

export const MainContTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 130px;
  color: white;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

export const LimitAmountCont = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3px;
  padding-right: 10px;

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

export const AccoutSpan = styled.div`
  font-size: 10px;
  color: gray;
  font-weight: 400;

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

export const AmountSpan = styled.div`
  font-size: 10px;
  color: black;
  font-weight: 700;

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

export const DomesticWireTfCont = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
  padding-right: 10px;

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

export const DomesticTf = styled.div`
  background-color: #ac8ec5;
  width: 130px;
  height: 30px;
  color: white;
  font-size: 12px;
  padding-left: 10px;
  padding-right: 1px;
  padding-top: 5px;
  border-radius: 5px;

  &:hover {
    transform: scale(1.05); /* Adjust the scale factor as needed */
  }

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

export const WireTf = styled.div`
  background-color: #5ac5c1;
  width: 100px;
  height: 30px;
  color: #003531;
  font-size: 12px;
  padding-left: 10px;
  padding-right: 1px;
  padding-top: 5px;
  border-radius: 5px;

  &:hover {
    transform: scale(1.05); /* Adjust the scale factor as needed */
  }

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

export const MainContThree = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  color: white;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

export const Recenttransactiontxt = styled.div`
  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
    font-size: 20px;
    font-weight: 600;
    color: #003531;
  }
`;

export const RTAmountSpan = styled.div`
  color: white;
  background-color: #068d7f;
  width: 50px;
  height: 17px;
  border-radius: 50px;
  font-size: 10px;
  font-weight: 400;
  padding-left: 5px;

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

export const RTTypeSpan = styled.div`
  display: flex;
  justify-content: flex-start;
  color: white;
  background-color: #064f8d;
  width: 35px;
  height: 17px;
  border-radius: 50px;
  font-size: 10px;
  font-weight: 400;
  padding-left: 5px;

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

export const RTDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  color: white;
  background-color: #8a6322;
  width: 65px;
  height: 17px;
  border-radius: 50px;
  font-size: 10px;
  font-weight: 400;
  padding-left: 5px;

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

export const RTTDateSpan = styled.div`
  display: flex;
  justify-content: flex-start;
  color: white;
  background-color: #38228a;
  width: 35px;
  height: 17px;
  border-radius: 50px;
  font-size: 10px;
  font-weight: 400;
  padding-left: 5px;

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

export const TimeSpan = styled.div`
  display: flex;
  justify-content: flex-start;
  color: white;
  background-color: #22708a;
  width: 35px;
  height: 17px;
  border-radius: 50px;
  font-size: 10px;
  font-weight: 400;
  padding-left: 5px;

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
  }
`;

export const ProfileImageContainer = styled.div``;