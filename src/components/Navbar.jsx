import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../store";

// Styled components
const MainContainer = styled.div`
  height: 60px;
  background-color: #d0db7f;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const SearchContainer = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding-right: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 70%;
  height: 100%;
  padding: 0 5px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  color: #282c34;
  background-color: #f5f5f5;
  &::placeholder {
    color: #282c34;
    font-weight: 500;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: black;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
  color: #282c34;
`;

// Component
const Navbar = () => {
  const { search, setSearch } = useStore();

  return (
    <MainContainer>
      <TitleWrapper>
        <Title>
          <FontAwesomeIcon icon={faShopify} /> Shop It
        </Title>
      </TitleWrapper>

      <SearchContainer>
        <Input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon icon={faSearch} />
      </SearchContainer>
    </MainContainer>
  );
};

export default Navbar;
