import { useDispatch } from "react-redux";
import useInput from "hooks/use-input";
import { useState } from "react";
import styled from "styled-components";

const OneTodo = ({ todo }) => {
  const { id, title, content, state } = todo;
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [editContent, setEditContent] = useInput(content);

  const handleUpdateTodo = () => {
    // Todo 수정
    if (!isEditMode) return setIsEditMode(true);
    dispatch({ type: "UPDATE_TODO", payload: { id, content: editContent } });
    setIsEditMode(false);
  };

  const handleCompleteTodo = () => {
    // Todo 상태 토글
    dispatch({ type: "COMPLETE_TODO", payload: { id } });
  };

  const handleDeleteTodo = () => {
    // Todo 삭제
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch({ type: "DELETE_TODO", payload: { id } });
    }
  };

  return (
    <S.FlexBox state={state}>
      <input type="checkbox" checked={state} onChange={handleCompleteTodo} />
      <h4>{title}</h4>
      {isEditMode ? (
        <textarea value={editContent} onChange={setEditContent}></textarea>
      ) : (
        <p>{content}</p>
      )}
      <button onClick={handleUpdateTodo}>내용 수정</button>
      <button onClick={handleDeleteTodo}>삭제</button>
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
