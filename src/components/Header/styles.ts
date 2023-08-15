import styled from "styled-components";

export const Header = styled.header`
  color: #fff;
  height: 74px;
  max-width: 960px;
  padding: 18px 10px;
  width: 100%;

  align-items: center;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  nav {
    display: flex;
    text-align: right;
    column-gap: 8px;
    cursor: pointer;

    li {
      font-weight: 600;
      font-size: 12px;
      font-style: normal;
      line-height: normal;
    }

    li:nth-of-type(1) {
      font-size: 14px;
    }

    li:nth-of-type(2) {
      color: #999;
    }

    img {
      height: 32px;
      width: 32px;
    }
  }
`;
