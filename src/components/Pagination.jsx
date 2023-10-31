import React from "react";
import styled from "styled-components";

// Styled components
const BottomNavigation = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
  padding: 10px;
  color: white;
`;

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 48px;
  color: gray;
  transition: color 0.3s;

  &:hover {
    color: #007bff; /* Change color on hover */
  }
`;

const Pagination = ({ onPrevClick, onNextClick }) => {
  return (
    <BottomNavigation>
      <ArrowButton onClick={onPrevClick}>&#8249;</ArrowButton>
      <ArrowButton onClick={onNextClick}>&#8250;</ArrowButton>
    </BottomNavigation>
  );
};

export default Pagination;
