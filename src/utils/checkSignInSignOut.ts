export const checkEmail = {
  value: /[a-z0-9]+@[a-z]+.[a-z]{2,3}/i,
  message: '이메일 형식에 맞지 않습니다',
};
export const checkPassword = {
  value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/i,
  message: '영문, 숫자를 포함해 8자 이상으로 지어주세요.',
};
export const checkNickName = {
  value: /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]{3,8}$/i,
  message: '닉네임은 3자 이상, 8자 이하로 지어주세요.',
};
