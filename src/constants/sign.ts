export const TERMS_TITLES = [
  '만 14세이상 입니다',
  '이용약관',
  '개인정보 수집 및 이용동의',
];

export const REQUIRED_FOR_PAYMENT = [
  '본인은 만 14세 이상이며, 주문 내용을 확인하였습니다.',
  '개인정보 수집이용 및 제3자 제공 동의',
  '결제대행 서비스 이용약관 동의',
];

export const NICKNAME_RULES = {
  required: '닉네임을 입력해주세요',
  pattern: {
    value: /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]{3,8}$/i,
    message: '닉네임은 3자 이상, 8자 이하로 지어주세요.',
  },
};
