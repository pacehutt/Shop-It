import React from "react";
import Navbar from "../components/Navbar";
import ProductsList from "../components/ProductsList";
import styled from "styled-components";
import Dropdown from "../components/Dropdown";
import Toolbar from "../components/Toolbar";
import Pagination from "../components/Pagination";
import { useStore } from "../store";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;

const Home = () => {
  const { page, setPage } = useStore();

  return (
    <Container>
      <Navbar />
      <Toolbar></Toolbar>

      <ProductsList></ProductsList>

      <Pagination
        onNextClick={() => {
          setPage(page + 1);
        }}
        onPrevClick={() => {
          setPage(page - 1);
        }}
      ></Pagination>
    </Container>
  );
};

export default Home;
