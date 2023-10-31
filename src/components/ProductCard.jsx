import React from "react";
import styled from "styled-components";

// Define a styled component for the product container
const ProductContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  width: 300px;
  box-shadow: 0 4px 6px #d0db7f26;
  border-radius: 8px;
`;

// Define a styled component for the product image
const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

// Define a styled component for the product title
const ProductTitle = styled.h3`
  font-size: 1.4rem;
  margin: 8px 0;
`;

// Define a styled component for the product description
const ProductDescription = styled.p`
  font-size: 1rem;
  margin: 8px 0;
`;

// Define a styled component for the product price
const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: #8d9c22;
`;

const ProductCard = ({ product }) => {
  return (
    <ProductContainer key={product.id.toString()}>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.name}</ProductTitle>
      <ProductDescription>
        {product.description.split(" ").slice(0, 11).join(" ")}...
      </ProductDescription>
      <ProductPrice>${product.price}</ProductPrice>
    </ProductContainer>
  );
};

export default ProductCard;
