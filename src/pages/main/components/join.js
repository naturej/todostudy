import BtnBox from "components/box/btn-box";

const JoinForm = () => {
  const handleJoin = () => {
    console.log("wow");
  };

  return (
    <form>
      <input name="email" type="text" placeholder="이메일"></input>
      <input name="password" type="password" placeholder="비밀번호"></input>
      <input
        name="passwordConfirm"
        type="password"
        placeholder="비밀번호 확인"
      ></input>
      <BtnBox>
        <button onClick={handleJoin}>회원가입</button>
      </BtnBox>
    </form>
  );
};

export default JoinForm;
