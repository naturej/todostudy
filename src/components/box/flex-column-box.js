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
  width: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 30px 40px;
  gap: 10px;
  border: 1px solid #bebebe;
  background-color: #fff;
  box-sizing: border-box;

  & form {
    display: flex;
    flex-direction: column;

    & input,
    textarea {
      padding: 16px 20px;
      margin: 0 0 8px;
      border: 1px solid #999;
      border-radius: 4px;
      ::placeholder {
        color: #999;
      }
    }
  }
`;
