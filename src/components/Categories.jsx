import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 100%;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  padding: 20px;

  @media only screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-weight: 600;
  color: #8d9c22;
  margin: 0;
  margin-top: 5rem;
  padding: 0 20px;
`;

const categories = [
  {
    name: "Accessories",
    image:
      "https://ae05.alicdn.com/kf/HTB1laFMyrGYBuNjy0Foq6AiBFXax/Skeleton-Tourbillon-Mechanical-Watch-Men-Automatic-Classic-Rose-Gold-Leather-Mechanical-Wrist-Watches-Reloj-Hombre-2018.jpg",
  },
  {
    name: "Shoes",
    image: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    name: "Clothing",
    image: "https://i.ibb.co/px2tCc3/jackets.png",
  },
];

const Categories = () => {
  return (
    <Container>
      <Title>More Categories</Title>
      <CategoryContainer>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.name} />
        ))}
      </CategoryContainer>
    </Container>
  );
};

export default Categories;
