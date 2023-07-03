import BtnBox from "components/box/btn-box";

const LogInForm = () => {
  const handleLogIn = () => {
    console.log("wow");
  };

  return (
    <form>
      <input name="email" type="text" placeholder="이메일"></input>
      <input name="password" type="password" placeholder="비밀번호"></input>
      <BtnBox>
        <button onClick={handleLogIn}>로그인</button>
      </BtnBox>
    </form>
  );
};

export default LogInForm;
