/**
 * 유효성 검사 validator.js
 */

// 이메일
export const validateEmail = () => {
  return {
    required: "이메일을 입력해주세요.",
    pattern: {
      value:
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
      message: "이메일 양식을 확인해주세요.",
    },
  };
};

// 비밀번호
export const validatePassword = () => {
  return {
    required: "비밀번호를 입력해주세요.",
    minLength: {
      value: 8,
      message: "비밀번호는 8글자 이상 입력해주세요.",
    },
  };
};

// 비밀번호 확인
export const validatePasswordConfirm = (passwordValue) => {
  return {
    required: "비밀번호 확인을 입력해주세요.",
    validate: (value) => {
      if (passwordValue !== value) {
        return "비밀번호와 비밀번호 확인이 일치하지 않습니다.";
      }
    },
  };
};
