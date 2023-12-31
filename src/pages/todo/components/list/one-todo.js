import { useDispatch } from "react-redux";
import useInput from "hooks/use-input";
import { useState } from "react";
import styled from "styled-components";
import { getTodo, updateTodo, deleteTodo } from "reducer/todoSlice";

const OneTodo = ({ todo }) => {
  const { id, title, content, state } = todo;
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [editContent, setEditContent] = useInput(content);

  const handleUpdateTodo = async () => {
    // Todo 수정
    if (!isEditMode) return setIsEditMode(true);
    await dispatch(updateTodo({ id, content: editContent, state }));
    dispatch(getTodo());
    setIsEditMode(false);
  };

  const handleCompleteTodo = async () => {
    // Todo 상태 토글
    await dispatch(updateTodo({ id, content, state: !state }));
    dispatch(getTodo());
  };

  const handleDeleteTodo = async () => {
    // Todo 삭제
    if (window.confirm("정말 삭제하시겠습니까?")) {
      await dispatch(deleteTodo({ id }));
      dispatch(getTodo());
    }
  };

  return (
    <S.FlexBox state={state}>
      <div className="checkDiv">
        <input type="checkbox" checked={state} onChange={handleCompleteTodo} />
      </div>
      <div className="contentDiv">
        <h4>{title}</h4>
        {isEditMode ? (
          <textarea value={editContent} onChange={setEditContent}></textarea>
        ) : (
          <p>{content}</p>
        )}
      </div>
      <div className="btnDiv">
        <button onClick={handleUpdateTodo}>내용 수정</button>
        <button onClick={handleDeleteTodo}>삭제</button>
      </div>
    </S.FlexBox>
  );
};

export default OneTodo;

const FlexBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;

  .checkDiv {
    min-width: 20px;
  }

  .contentDiv {
    flex-grow: 1;
    h4 {
      margin: 8px 0 0;
    }
    textarea {
      width: 100%;
    }
    p {
      margin: 8px 0;
      word-break: break-word;
    }
  }

  .btnDiv {
    display: flex;
    min-width: 120px;
    gap: 10px;
  }

  h4 {
    color: ${({ state }) => (state ? "#999" : "#333")};
    text-decoration: ${({ state }) => (state ? "line-through" : "")};
  }
  p {
    color: #999;
  }
`;

const S = {
  FlexBox,
};
