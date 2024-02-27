import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

import { postLogin } from '@/api/member';

export default NextAuth({
  providers: [
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
    CredentialsProvider({
      id: 'social-credentials',
      name: 'credentials',
      type: 'credentials',
      credentials: {
        email: { type: 'text' },
        socialType: { type: 'text' },
        memberId: { type: 'text' },
        accessToken: {type: "text"},
      },
      async authorize(credentials): Promise<any> {
        if (!credentials?.accessToken) { throw new Error('Wrong User');}
        return {
          accessToken: credentials?.accessToken,
          memberId: credentials?.memberId, 
        };
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
