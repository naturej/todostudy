import { useState } from "react";
import TodoList from "./components/list/todo-list";
import AddModal from "./components/modal/add-modal";
import styled from "styled-components";
import BtnBox from "components/box/btn-box";

const TodoListPage = () => {
  const [isAddModalShow, setIsAddModalShow] = useState(false);

  const handleShowModal = () => {
    setIsAddModalShow(true);
  };

  return (
    <S.Wrapper>
      <S.ScrollDiv>
        <TodoList />
      </S.ScrollDiv>
      <BtnBox>
        <button onClick={handleShowModal}>할 일 추가</button>
      </BtnBox>
      {isAddModalShow && <AddModal setIsAddModalShow={setIsAddModalShow} />}
    </S.Wrapper>
  );
};

export default TodoListPage;

const Wrapper = styled.div`
  margin: 100px auto;
  max-width: 500px;
`;

const ScrollDiv = styled.div`
  max-height: 400px;
  overflow-y: scroll;
`;

const S = {
  Wrapper,
  ScrollDiv,
};
