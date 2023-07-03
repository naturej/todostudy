import styled from "styled-components";

const FlexColumnBox = ({ title, children }) => {
  return (
    <FlexColumnArea>
      <h2>{title}</h2>
      {children}
    </FlexColumnArea>
  );
};

export default FlexColumnBox;

const FlexColumnArea = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 10px;
  border: 1px solid #bebebe;
  background-color: #fff;

  & form {
    display: flex;
    flex-direction: column;

    & input,
    textarea {
      padding: 12px 20px;
      margin: 0 0 8px;
      border: 1px solid #999;
      ::placeholder {
        color: #999;
      }
    }
  }
`;
