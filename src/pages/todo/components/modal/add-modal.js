import BtnBox from "components/box/btn-box";
import FlexColumnBox from "components/box/flex-column-box";
import { useDispatch } from "react-redux";
import { addTodo } from "reducer/todoSlice";
import styled from "styled-components";

const AddModal = ({ setIsAddModalShow }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsAddModalShow(false);
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

    dispatch(addTodo(newTodo));
    setIsAddModalShow(false);
    e.target.title.value = "";
    e.target.content.value = "";
  };

  return (
    <S.DimmedBoxWrapper>
      <form onSubmit={handleAddTodo}>
        <FlexColumnBox title={"할 일 추가하기"}>
          <input type="text" name="title" placeholder="제목" />
          <textarea name="content" placeholder="내용"></textarea>
          <BtnBox>
            <button type="submit">추가</button>
            <button type="button" onClick={handleClose}>
              취소
            </button>
          </BtnBox>
        </FlexColumnBox>
      </form>
    </S.DimmedBoxWrapper>
  );
};

export default AddModal;

const DimmedBoxWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const S = {
  DimmedBoxWrapper,
};
