import styled from "styled-components";

const BtnBox = ({ children }) => {
  return <BtnArea>{children}</BtnArea>;
};

export default BtnBox;

const BtnArea = styled.div`
  display: flex;
  gap: 10px;
  & > button {
    flex: auto;
    padding: 12px;
    border: 1px solid #999;
  }
`;
