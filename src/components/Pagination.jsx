import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../store";

// Styled components
const BottomNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  padding: 10px;
  color: white;
  margin-top: 30px;
`;

const Pagination = ({ onPrevClick, onNextClick }) => {
  const { page, lastPage } = useStore();

  return (
    <BottomNavigation>
      <FontAwesomeIcon
        icon={faCircleChevronLeft}
        onClick={onPrevClick}
        size="2x"
        color="#8D9C22"
        style={{
          cursor: "pointer",
          pointerEvents: page === 1 ? "none" : "auto",
          color: page === 1 ? "#D0DB7F" : "#8D9C22",
        }}
      />
      <FontAwesomeIcon
        icon={faCircleChevronRight}
        onClick={onNextClick}
        size="2x"
        color="#8D9C22"
        style={{
          cursor: "pointer",
          pointerEvents: lastPage ? "none" : "auto",
          color: lastPage ? "#D0DB7F" : "#8D9C22",
        }}
      />
    </BottomNavigation>
  );
};

export default Pagination;
