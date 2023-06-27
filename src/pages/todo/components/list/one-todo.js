import useInput from "hooks/use-input";
import { useState } from "react";
import styled from "styled-components";

const OneTodo = ({
  todo,
  handelUpdateTodo,
  handleUpdateStateTodo,
  handleDeleteTodo,
}) => {
  const { id, title, content, state } = todo;
  const [isEditMode, setIsEditMode] = useState(false);
  const [editContent, setEditContent] = useInput(content);

  const handleUpdate = () => {
    if (!isEditMode) return setIsEditMode(true);
    handelUpdateTodo(id, editContent);
    setIsEditMode(false);
  };

  const handleUpdateState = () => {
    handleUpdateStateTodo(id, state);
  };

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      handleDeleteTodo(id);
    }
  };

  return (
    <S.FlexBox state={state}>
      <input
        type="checkbox"
        checked={state}
        onChange={() => handleUpdateState(id)}
      />
      <h4>{title}</h4>
      {isEditMode ? (
        <textarea value={editContent} onChange={setEditContent}></textarea>
      ) : (
        <p>{content}</p>
      )}
      <button onClick={() => handleUpdate(id)}>내용 수정</button>
      <button onClick={() => handleDelete(id)}>삭제</button>
    </S.FlexBox>
  );
};

export default OneTodo;

const FlexBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;

  h4 {
    color: ${({ state }) => (state ? "#888" : "#333")};
  }
  p {
    color: #888;
  }
`;

const S = {
  FlexBox,
};
