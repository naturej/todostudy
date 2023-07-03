import BtnBox from "components/box/btn-box";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { validateEmail, validatePassword } from "utils/validator";

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();

  const onSubmitLoginForm = (data) => {
    if (data.email === "") return alert("이메일을 입력해주세요.");
    if (data.password === "") return alert("비밀번호를 입력해주세요.");

    alert("반갑습니다");
    navigate("/todo/list");
  };

  // 유효성 검사
  const emailRegister = register("email", validateEmail());
  // 비밀번호 필수값만 유효성 검사
  const { required } = validatePassword();
  const passwordRegister = register("password", { required });

  return (
    <form onSubmit={handleSubmit(onSubmitLoginForm)}>
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
      <BtnBox>
        <button>로그인</button>
      </BtnBox>
    </form>
  );
};

export default LogInForm;

const ErrorMessage = styled.p`
  margin: 0 0 8px;
  color: #f00;
`;
