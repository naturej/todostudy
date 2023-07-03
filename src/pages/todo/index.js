import { useState } from "react";
import TodoList from "./components/list/todo-list";
import AddModal from "./components/modal/add-modal";
import styled from "styled-components";
import BtnBox from "components/box/btn-box";
import FlexColumnBox from "components/box/flex-column-box";

const TodoListPage = () => {
  const [isAddModalShow, setIsAddModalShow] = useState(false);

  const handleShowModal = () => {
    setIsAddModalShow(true);
  };

  return (
    <FlexColumnBox title={"할 일 목록"}>
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

const S = {
  ScrollDiv,
};
