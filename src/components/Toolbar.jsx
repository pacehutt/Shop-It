import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { useStore } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faFilter } from "@fortawesome/free-solid-svg-icons";

// Styled components
const ToolbarRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  height: 30px;
  padding: 10px;
  padding-right: 20px;
  color: white;
`;

const Icon = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const Toolbar = () => {
  const [categoryDropdownVisible, setCategoryDropdownVisible] = useState(false);
  const [filterDropdownVisible, setFilterDropdownVisible] = useState(false);

  const toggleCategoryDropdown = () => {
    setCategoryDropdownVisible(!categoryDropdownVisible);
    setFilterDropdownVisible(false);
  };

  const toggleFilterDropdown = () => {
    setFilterDropdownVisible(!filterDropdownVisible);
    setCategoryDropdownVisible(false);
  };

  const { category, setCategory, sort, setSort } = useStore();

  return (
    <ToolbarRow>
      <Dropdown
        visible={categoryDropdownVisible ? "true" : ""}
        options={["All", "Accessories", "Shoes", "Clothing"]}
        selectedOption={category}
        setSelect={setCategory}
        toggleVisible={toggleCategoryDropdown}
      ></Dropdown>
      <Dropdown
        visible={filterDropdownVisible ? "true" : ""}
        options={["Price Low to High", "Price High to Low"]}
        selectedOption={sort}
        setSelect={setSort}
        toggleVisible={toggleFilterDropdown}
      ></Dropdown>
      <FontAwesomeIcon
        icon={faTag}
        onClick={toggleCategoryDropdown}
        color="#8D9C22"
        size="lg"
      />
      <FontAwesomeIcon
        icon={faFilter}
        onClick={toggleFilterDropdown}
        color="#8D9C22"
        size="lg"
      />
    </ToolbarRow>
  );
};

export default Toolbar;
