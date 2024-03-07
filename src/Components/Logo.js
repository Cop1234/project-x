import React from "react";
import styled from "styled-components";

const Logo = ({ value }) => {
  return <LogoIcon src={value} />;
};

export default Logo;

const LogoIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  align-items: center;
  justify-content: center;
`;
