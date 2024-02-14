export interface Signup {
  name: string;
  nickname: string;
  email: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface ChangePassword {
  memberId: number;
  newPassword: string;
}

export interface ChangeImage {
  memberId: number;
  nickname: string;
  profileImage: string;
}