import { useState } from "react";
import TodoList from "./components/list/todo-list";
import AddModal from "./components/modal/add-modal";
import styled from "styled-components";

const TodoListPage = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "할일1",
      content: "내용1",
      state: false,
    },
    {
      id: 2,
      title: "할일2",
      content: "내용2",
      state: false,
    },
    {
      id: 3,
      title: "할일3",
      content: "내용3",
      state: true,
    },
  ]);
  const [isAddModalShow, setIsAddModalShow] = useState(false);

  const handleShowModal = () => {
    setIsAddModalShow(true);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const content = e.target.content.value;

    if (!title) return alert("제목을 입력해주세요");

    const newTodo = {
      id: Math.floor(Math.random() * 100000),
      title,
      content,
      state: false,
    };

    setTodoList([newTodo, ...todoList]);
    setIsAddModalShow(false);
    e.target.title.value = "";
    e.target.content.value = "";
  };

  return (
    <S.Wrapper>
      <S.ScrollDiv>
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </S.ScrollDiv>
      <button onClick={handleShowModal}>할 일 추가</button>
      {isAddModalShow && (
        <AddModal
          setIsAddModalShow={setIsAddModalShow}
          handleAddTodo={handleAddTodo}
        />
      )}
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
