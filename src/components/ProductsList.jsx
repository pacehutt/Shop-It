import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import productList from "../config/productList";
import { useStore } from "../store";
import Pagination from "./Pagination";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  text-align: left;
  padding: 0 20px;
`;

const ProductsList = () => {
  const { category, sort, search, page, productsPerPage, setPage } = useStore();
  console.log(category);

  const filteredProductList = category
    ? productList.filter((product) => {
        return product.category === category;
      })
    : productList;

  const sortedProductList =
    sort === ""
      ? filteredProductList
      : sort === "Price Low to High"
      ? filteredProductList.sort((a, b) => a.price - b.price)
      : filteredProductList.sort((a, b) => b.price - a.price);

  const searchedList =
    search === ""
      ? sortedProductList
      : sortedProductList.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        );

  const totalProducts = searchedList.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // Handle cases when the last page is reached or user goes underflow
  if (page < 1) {
    // If the page is less than 1, reset to the first page
    setPage(1);
  } else if (page > totalPages) {
    // If the page exceeds the total pages, reset to the last page
    setPage(totalPages);
  }

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentPageProducts = searchedList.slice(startIndex, endIndex);

  return (
    <Wrapper>
      <List>
        {currentPageProducts.map((product) => {
          return <ProductCard product={product} key={product.id.toString()} />;
        })}
      </List>
    </Wrapper>
  );
};

export default ProductsList;
