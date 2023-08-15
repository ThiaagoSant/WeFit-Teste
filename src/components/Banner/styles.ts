import styled, { css } from "styled-components";

interface ContainerProps {
  title: boolean;
}

export const Container = styled.main<ContainerProps>`
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 586px) {
    width: 90%;
  }

  div {
    background-color: #fff;
    border-radius: 4px;
    max-width: 960px;
    width: 100%;
    padding: 64px;
    margin: 24px 1rem;
    @media screen and (max-width: 586px) {
      ${({ title }) => (title ? "padding: 64px 24px;" : "padding: 64px 0px;")}
    }

    align-items: center;
    display: flex;
    flex-direction: column;
  }

  h2 {
    color: #2f2e41;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 32px;

    @media screen and (max-width: 586px) {
      ${({ title }) => (title ? "padding: 0px 52px;" : "padding: 0px 82px;")}
    }
  }

  img {
    max-width: 447px;
    width: 100%;
    object-fit: contain;

    ${({ title }) => (title ? "height: 307px;" : "")}/* height: 265.802px; */
  }

  button {
    cursor: pointer;
    margin-top: 32px;
    /* @media screen and (max-width: 586px) {
      margin-top: 0;
    } */
    width: 180px;
    height: 40px;
    border-radius: 4px;
    background: #009edd;

    color: #fff;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
