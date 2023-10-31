import React from "react";
import styled from "styled-components";

// Styled components
const Select = styled.select`
  display: ${(props) => (props.visible ? "block" : "none")};

  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  animation: fade 0.3s ease-in-out;
  min-width: 150px; /* Set a minimum width */

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
`;

const Option = styled.option`
  background-color: #fff;
  color: #333;
  font-size: 16px;
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
