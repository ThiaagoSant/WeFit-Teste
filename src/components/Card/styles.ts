import styled from "styled-components";

export const Content = styled.div`
  width: 309px;
  /* height: 305px; */

  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 11px;

  figure {
    width: 147px;
    height: 188px;

    img {
      object-fit: contain;
      width: 100%;
    }
  }

  p {
    text-align: center;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p:nth-of-type(1) {
    color: #333;
    font-size: 12px;
    padding: 7px 0 5px 0;
  }

  p:nth-of-type(2) {
    color: #2f2e41;
    font-size: 16px;
    padding-bottom: 8px;
  }
`;

export const Button = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background: #009edd;
  column-gap: 12px;
  cursor: pointer;

  div {
    align-items: center;
    display: flex;

    img {
      width: 13px;
      height: 13px;
      object-fit: contain;
      margin-right: 3px;
    }

    & > p {
      color: #fff !important;
      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  p {
    color: white !important;
  }
`;
