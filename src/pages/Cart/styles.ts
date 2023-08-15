import styled from "styled-components";

export const ContentCardCart = styled.div`
  width: 100%;
  max-width: 960px;
  background-color: #fff;
  border-radius: 4px;
  padding: 24px;

  footer {
    align-items: center;
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #999;
    padding-top: 21px;

    button {
      cursor: pointer;
      color: #fff;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      border-radius: 4px;
      background: #009edd;
      height: 40px;
      padding: 0 32px;
      width: 235px;
    }

    div {
      align-items: center;
      display: flex;
      column-gap: 12px;
      p {
        color: #999;
        text-align: center;

        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      span {
        color: #2f2e41;
        text-align: center;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
  }
`;

export const CardCart = styled.section`
  width: 100%;
  position: relative;
  border-radius: 4px;
  background: #fff;

  ul {
    align-items: flex-start;
    display: flex;
    column-gap: 52px;

    li {
      color: #999;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      &:nth-of-type(1),
      &:nth-of-type(3) {
        flex-grow: 2;
      }
    }
  }
`;

export const ContentImg = styled.div`
  display: flex;
  margin: 21px 0;

  & > img {
    width: 89px;
    height: 114px;
    margin-right: 52px;
  }

  section {
    justify-content: center;
    align-items: flex-start;
    display: flex;
    row-gap: 8px;
    flex-direction: column;
    /* background-color: blue; */

    p {
      color: #2f2e41;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    p:nth-of-type(1) {
      font-size: 14px;
    }
    p:nth-of-type(2) {
      font-size: 16px;
    }
  }
`;

export const FormQuantityInput = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 65px;

  img {
    cursor: pointer;
    object-fit: contain;
    width: 18px;
    height: 18px;
  }

  span {
    align-items: center;
    display: flex;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    background: #fff;
    width: 62px;
    height: 26px;
    padding-left: 16px;
    margin: 0 11px;

    color: #2f2e41;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const SubTotalContent = styled.li`
  flex-grow: 2;
  p {
    margin-top: 70px;
    color: #2f2e41;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const TrashContainer = styled.li`
  img {
    cursor: pointer;
    margin-top: 85px;
  }
`;
