import React from "react";
import styled from "styled-components";
// import { ReactComponent as PlusIcon } from "../../../assets/icons/plus-icons.png";
import {ReactComponent as PlusIcon} from "../../../assets/icons/plus-icons.svg"
import Button from "../../UI/Button";
const MealP = ({ meal }) => {
  return (
    <Container>
      <StyledItemInfo>
        <StyledTitle>{meal.title}</StyledTitle>
        <p>{meal.description}</p>
        <span>${meal.price}</span>
      </StyledItemInfo>
      <div>
        <StyledInputForm>
        
        </StyledInputForm>
        <Button>
          <StyledIcon />
          Add
        </Button>
      </div>
    </Container>
  );
};
export default MealP;
const Container = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  margin-bottom: 24px;
  :last-child {
    border: none;
    margin-bottom: 0;
  }
`;
const StyledItemInfo = styled.div`
  margin-bottom: 20px;
  p {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    margin-top: 4px;
  }
  span {
    color: #ad5502;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    margin-top: 4px;
  }
`;
const StyledTitle = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin: 0;
`;
const StyledIcon = styled(PlusIcon)`
  margin-right: 10px;
`;
const StyledInputForm = styled.div``;
