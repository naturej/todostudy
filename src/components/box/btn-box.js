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
    font-weight: 500;
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
      cursor: not-allowed;
      color: #999;
      border: 1px solid #aaa;
      background-color: #f0f0f0;
    }
  }
`;
