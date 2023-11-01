import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Skeleton from "./Skeleton";

const ProductContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  width: 300px;
  height: 460px;
  box-shadow: 0 4px 6px #d0db7f26;
  border-radius: 8px;
  position: relative;
  @media (max-width: 700px) {
    width: 90%;
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: 300px;
  border-radius: 8px;
  object-fit: cover;
`;

const ProductTitle = styled.h3`
  font-size: 1.4rem;
  margin: 8px 0;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  margin: 8px 0;
`;

const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: #8d9c22;
  position: absolute;
  bottom: 6px;
`;

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ProductContainer key={product.id.toString()}>
      {loading ? (
        <Skeleton height={"300px"} width={"100%"}></Skeleton>
      ) : (
        <ProductImage src={product.image} alt={product.title} />
      )}
      <ProductTitle>{product.name}</ProductTitle>
      <ProductDescription>
        {product.description.split(" ").slice(0, 11).join(" ")}...
      </ProductDescription>
      <ProductPrice>${product.price}</ProductPrice>
    </ProductContainer>
  );
};

export default ProductCard;
