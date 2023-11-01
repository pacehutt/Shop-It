// Skeleton.js
import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`;

const SkeletonWrapper = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  position: relative;
  background: linear-gradient(90deg, #f0f0f0 25%, #ecf0cb 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${loadingAnimation} 1s infinite;
`;

export default function Skeleton({ width, height }) {
  return <SkeletonWrapper width={width} height={height} />;
}
