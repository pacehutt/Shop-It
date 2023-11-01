import React from "react";
import styled from "styled-components";

// Styled components
const Select = styled.select`
  display: ${(props) => (props.visible ? "block" : "none")};

  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;
  animation: fade 0.3s ease-in-out;
  min-width: 90px; /* Set a minimum width */

  @keyframes fade {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 350px) {
    min-width: 0px;
    width: 60px;
  }
`;

const Option = styled.option`
  background-color: #fff;
  color: #333;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 550px) {
    font-size: 12px;
  }
`;

const Dropdown = ({
  visible,
  options,
  selectedOption,
  setSelect,
  toggleVisible,
}) => {
  return (
    <Select
      value={selectedOption}
      onChange={(e) => {
        setSelect(e.target.value);
        toggleVisible();
      }}
      visible={visible}
    >
      {options.map((option) => (
        <Option key={option} value={option === "All" ? "" : option}>
          {option}
        </Option>
      ))}
    </Select>
  );
};

export default Dropdown;
