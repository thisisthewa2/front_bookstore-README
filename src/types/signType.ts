export interface SignValueType {
  email: string;
  password: string;
}

export interface SignUpValueType extends SignValueType {
  repassword: string;
  nickname: string;
  selectAll: boolean;
}
