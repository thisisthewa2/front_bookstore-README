import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";

import { postLogin } from '@/api/member';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!
  }),
    
    CredentialsProvider({
      id: 'signin-credentials',
      name: 'credentials',
      type: 'credentials',
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials): Promise<any> {
        const data = {
          email: credentials?.email,
          password: credentials?.password,
        };

        const response = await postLogin(data);

        if (!response) throw new Error('Wrong User');
        
        if (response.status === 200 && response.data.Authentication) {
          return { accessToken: response.data?.Authentication?.split(' ')[1], memberId : response.data.memberId };
        } else {
          // 로그인 실패 시 처리
          throw new Error('Login failed!');
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user) return true;
      else return false;
    },
    async jwt({ token, user }) {
      if (user && 'accessToken' in user && 'memberId' in user) {
        token.accessToken = user.accessToken;
        token.memberId = user.memberId;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.accessToken) {
        session.accessToken = token.accessToken as string;
        session.memberId = token.memberId as number;
      }
      return session;
    },
  },
  secret : process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin',
  },
});
