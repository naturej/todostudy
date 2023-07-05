import styled from "styled-components";

const BtnBox = ({ children }) => {
  return <BtnArea>{children}</BtnArea>;
};

export default BtnBox;

const BtnArea = styled.div`
  display: flex;
  margin-top: 4px;
  gap: 10px;
  & > button {
    flex: auto;
    padding: 16px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid #5c5ad9;
    background-color: #5c5ad9;
    border-radius: 4px;
    cursor: pointer;

    &.cancel {
      border: 1px solid #666;
      color: #666;
      background-color: #fff;
    }

    &.disabled {
      cursor: default;
      color: #999;
      font-weight: 400;
      border: 1px solid #aaa;
      background-color: #f0f0f0;
    }
  }
`;
