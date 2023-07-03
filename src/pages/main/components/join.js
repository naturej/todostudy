import BtnBox from "components/box/btn-box";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import {
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
} from "utils/validator";

const JoinForm = ({ setIsFormLogin }) => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
  });

  // 유효성 검사
  const emailRegister = register("email", validateEmail());
  const passwordRegister = register("password", validatePassword());
  const passwordConfirmRegister = register(
    "passwordConfirm",
    validatePasswordConfirm(getValues("password"))
  );

  // 회원가입 버튼 클릭 시
  const onSubmitJoinForm = (data) => {
    if (data.email === "") return alert("이메일을 입력해주세요.");
    if (data.password === "") return alert("비밀번호를 입력해주세요.");
    if (data.passwordConfirm === "")
      return alert("비밀번호 확인을 입력해주세요.");

    alert("회원가입이 완료되었습니다.");
    setIsFormLogin(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitJoinForm)}>
      <input
        name="email"
        type="text"
        placeholder="이메일"
        {...emailRegister}
      ></input>
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      <input
        name="password"
        type="password"
        placeholder="비밀번호"
        {...passwordRegister}
      ></input>
      {errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}
      <input
        name="passwordConfirm"
        type="password"
        placeholder="비밀번호 확인"
        {...passwordConfirmRegister}
      ></input>
      {errors.passwordConfirm && (
        <ErrorMessage>{errors.passwordConfirm.message}</ErrorMessage>
      )}
      <BtnBox>
        <button className={!isValid ? "disabled" : ""}>회원가입</button>
      </BtnBox>
    </form>
  );
};

export default JoinForm;

const ErrorMessage = styled.p`
  margin: 0 0 8px;
  color: #f00;
`;
