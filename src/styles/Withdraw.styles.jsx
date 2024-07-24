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

  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
    padding-left: 10px;
    padding-right: 10px;
    top: 200px;
  }
`;

export const YourBalanceIcon = styled.div`
  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    background-color: white;
    width: 100%;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
  }
`;

export const YourBalance = styled.div`
  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
    color: lightgray;
    font-size: 13px;
    font-weight: 500;
    color: gray;
  }
`;

export const IconYourBalance = styled.div`
  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
  }
`;

export const YourBalanceAmount = styled.div`
  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
    color: lightgray;
    font-size: 25px;
    font-weight: 700;
    color: black;
  }
`;

export const DepositCont = styled.div`
  @media ${devices.tablet} {
    /* Add tablet-specific styles here */
  }

  @media ${devices.mobile} {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    background-color: white;
    width: 100%;
    height: 700px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Add shadow to all sides */
  }
`;

export const Subcont = styled.div`
  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const DepositSubCont = styled.div`
  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
    display: flex;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }
`;

export const Deposittext = styled.div`
  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
    font-size: 18px;
    font-weight: 700;
    color: black;
  }
`;

export const ArrowUpdown = styled.img`
  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
    width: 20px;
    height: 20px;
  }
`;

export const Chooseyouamount = styled.div`
  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
    color: lightgray;
    font-size: 13px;
    font-weight: 500;
    color: gray;
  }
`;

export const AmountboxCont = styled.div`
  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;
    height: auto;
  }
`;

export const Amountbox = styled.div`
  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
    display: flex;
    align-items: center;
    margin-top: 20px;
    justify-content: center;
    width: 150px;
    height: 50px;
    border-radius: 5px;
    border: 2px solid darkgray;
    color: gray;
    transition: background-color 0.3s ease; /* Add a smooth transition effect */

    &:hover {
      background-color: gray; /* Change the background color on hover */
      color: white;
    }
  }
`;

export const EnterAmount = styled.div`
  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
    padding-top: 10px;
    color: lightgray;
    font-size: 13px;
    font-weight: 500;
    color: gray;
  }
`;

export const Sendbotton = styled.div`
  @media ${devices.tablet} {
  }

  @media ${devices.mobile} {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    padding: 10px;
    color: gray;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width:280px;
  margin: 0 auto;

`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Inputs = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &::placeholder {
    font-size: 14px;
    color: #999;
  }
`;

export const Buttonz = styled.button`
  padding: 10px;
  margin-top: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const Spacer = styled.div`
  padding: 5px;
  
`;