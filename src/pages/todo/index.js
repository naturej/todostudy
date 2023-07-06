import { useState } from "react";
import TodoList from "./components/list/todo-list";
import AddModal from "./components/modal/add-modal";
import styled from "styled-components";
import BtnBox from "components/box/btn-box";
import FlexColumnBox from "components/box/flex-column-box";
import AuthApi from "apis/auth.api";

const TodoListPage = () => {
  const [isAddModalShow, setIsAddModalShow] = useState(false);

  const handleShowModal = () => {
    setIsAddModalShow(true);
  };

  const handleLogout = () => {
    AuthApi.logout();
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  return (
    <FlexColumnBox title={"할 일 목록 📝"}>
      <S.LogoutBtn onClick={handleLogout}>로그아웃</S.LogoutBtn>
      <S.ScrollDiv>
        <TodoList />
      </S.ScrollDiv>
      <BtnBox>
        <button onClick={handleShowModal}>할 일 추가</button>
      </BtnBox>
      {isAddModalShow && <AddModal setIsAddModalShow={setIsAddModalShow} />}
    </FlexColumnBox>
  );
};

export default TodoListPage;

const ScrollDiv = styled.div`
  max-height: 400px;
  overflow-y: scroll;
`;

const LogoutBtn = styled.div`
  font-size: 14px;
  color: #999;
  position: absolute;
  top: 48px;
  right: 30px;
  cursor: pointer;
`;

const S = {
  ScrollDiv,
  LogoutBtn,
};
