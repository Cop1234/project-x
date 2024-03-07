import React from "react";
import Logo from "../../assets/image/x_logo.png";
import styled from "styled-components";
import { devices } from "../../Components/devices";
import LoginFrom from "./LoginFrom";
import Footer from "./footer";

function LoginPage() {
  return (
    <Wrapper>
      <DivColumn>
        <DivRow>
          <DivLogo>
            <LogoImage src={Logo} />
          </DivLogo>
          <LoginFrom />
        </DivRow>
        <Footer />
      </DivColumn>
    </Wrapper>
  );
}

export default LoginPage;

export const Wrapper = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media ${devices.md} {
    align-items: start;
  }
`;

export const DivColumn = styled.div`
  width: 100%;
  flex-direction: column;
  @media ${devices.md} {
    margin-top: 2.1rem;
  }
`;

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 96vh;

  @media ${devices.md} {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 2.5rem;
    margin-left: 5rem;
  }

  @media ${devices.sm} {
    flex-direction: column;
    height: 100%;
    margin-bottom: 2.5rem;
    margin-left: 2.5rem;
  }
`;

export const DivLogo = styled.div`
  width: 100%;
  margin-left: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${devices.md} {
    margin-left: 0rem;
    justify-content: left;
    align-items: start;
  }
`;

export const LogoImage = styled.img`
  width: 23.5rem;
  height: 23.5rem;

  @media ${devices.md} {
    width: 2.9rem;
    height: 2.9rem;
  }
`;
