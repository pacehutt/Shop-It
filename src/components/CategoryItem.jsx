import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  height: 350px;
  width: 33%;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 680px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0.8;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
  opacity: 0.4;
  z-index: 1;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  color: white;
`;

const Title = styled.h1`
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Overlay />
      <Image src={item.image} />

      <Info>
        <Title>{item.name}</Title>
      </Info>
    </Container>
  );
};

export default CategoryItem;
