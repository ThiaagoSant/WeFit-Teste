import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const RotateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  animation: ${rotateAnimation} 2s linear infinite;
`;
