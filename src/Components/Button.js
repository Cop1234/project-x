import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Button = ({ logoImage, text, btnType }) => {
  return (
    <div>
      {btnType !== "signUp" && btnType !== "signIn" ? (
        <Btn btnType={btnType}>
          <Logo value={logoImage} /> <text>{text}</text>
        </Btn>
      ) : (
        <Btn btnType={btnType}>
          <text>{text}</text>
        </Btn>
      )}
    </div>
  );
};

export default Button;

const Btn = styled.button`
  background-color: ${(props) =>
    props.btnType === "signUp"
      ? "hsla(207, 100%, 49%, 1)"
      : props.btnType === "signIn"
      ? "black"
      : "white"};
  width: 300px;
  height: 40px;
  white-space: nowrap;
  color: ${(props) =>
    props.btnType === "signUp"
      ? "white"
      : props.btnType === "signIn"
      ? "hsla(203, 100%, 50%, 1)"
      : "black"};
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5rem;
  user-select: none;
  transition: all 0.1s ease-in;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  border: ${(props) => (props.btnType !== "signIn" ? "none" : "solid")};
  border-color: hsla(203, 100%, 83%, 0.5);
  border-width: 0.5px;

  ::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    background-color: ${(props) =>
      props.btnType === "signUp"
        ? "hsla(207, 100%, 49%, 0.9)"
        : props.btnType === "signIn"
        ? "hsla(203, 100%, 50%, 0.1)"
        : "hsla(215, 0%, 100%, 0.9)"};
  }
`;
