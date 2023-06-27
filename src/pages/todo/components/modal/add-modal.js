import styled from "styled-components";

const AddModal = ({ setIsAddModalShow, handleAddTodo }) => {
  const handleClose = () => {
    setIsAddModalShow(false);
  };

  return (
    <S.FlexColumnBoxWrapper>
      <form onSubmit={handleAddTodo}>
        <S.FlexColumnBox>
          <h2>할 일 추가하기</h2>
          <input type="text" name="title" placeholder="제목" />
          <textarea name="content" placeholder="내용"></textarea>
          <S.BtnArea>
            <button type="submit">추가</button>
            <button type="button" onClick={handleClose}>
              취소
            </button>
          </S.BtnArea>
        </S.FlexColumnBox>
      </form>
    </S.FlexColumnBoxWrapper>
  );
};

export default AddModal;

const FlexColumnBoxWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const FlexColumnBox = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 10px;
  border: 1px solid #bebebe;
  background-color: #fff;

  & > input,
  textarea {
    padding: 12px 20px;
    border: 1px solid #999;
  }
`;

const BtnArea = styled.div`
  display: flex;
  gap: 10px;
  & > button {
    flex: auto;
    padding: 12px;
    border: 1px solid #999;
  }
`;

const S = {
  FlexColumnBoxWrapper,
  FlexColumnBox,
  BtnArea,
};