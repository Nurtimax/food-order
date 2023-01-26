import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return <StyledButton >{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  background: #8a2b06;
  color: #fff;
  border-radius: 20px;
  padding: 10px 32px;
  font-weight: 600;
  line-height: 24px;
  border: none;
`;
