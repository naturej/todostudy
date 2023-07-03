import FlexColumnBox from "components/box/flex-column-box";
import LogInForm from "./components/login";
import JoinForm from "./components/join";
import { useState } from "react";
import styled from "styled-components";

const MainPage = () => {
  const [isFormLogin, setIsFormLogin] = useState(true);

  return (
    <FlexColumnBox title={isFormLogin ? "LOG IN" : "JOIN"}>
      <LoginTab>
        <div
          className={isFormLogin ? "active" : ""}
          onClick={() => setIsFormLogin(true)}
        >
          로그인
        </div>
        <div
          className={!isFormLogin ? "active" : ""}
          onClick={() => setIsFormLogin(false)}
        >
          회원가입
        </div>
      </LoginTab>
      {isFormLogin ? (
        <LogInForm />
      ) : (
        <JoinForm setIsFormLogin={setIsFormLogin} />
      )}
    </FlexColumnBox>
  );
};

export default MainPage;

const LoginTab = styled.div`
  display: flex;
  gap: 0;
  & > div {
    flex: auto;
    padding: 12px;
    margin-bottom: 12px;
    text-align: center;
    background-color: #f0f0f0;
    border-bottom: 1px solid #aaa;
    cursor: pointer;

    &.active {
      background-color: #fff;
      border-width: 1px 1px 0px 1px;
      border-color: #aaa;
      border-style: solid;
    }
  }
`;
