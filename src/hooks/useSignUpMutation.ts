import { postSignup } from '@/api/member';
import { Login, Signup } from '@/types/api/member';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { notify } from '@/components/toast/toast';
import { signIn } from 'next-auth/react';

function useSignUpMutation() {
  const router = useRouter();
  const loginMutation = useMutation({
    mutationFn: async (data: Login) => {
      const { email, password } = data;
      await signIn('signin-credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/',
      });
    },
    onSuccess: () => router.push('/'),
  });

  const createMemberMutation = useMutation({
    mutationFn: async (personData: Signup) => {
      await postSignup(personData);
      return personData;
    },
    onSuccess(data) {
      loginMutation.mutate({
        email: data.email,
        password: data.password,
      });
    },
    onError(error) {
      if (error instanceof AxiosError) {
        const message = error?.response?.data?.message;
        notify({ type: 'error', text: message });
      }
    },
  });
  return {
    createMemberMutation,
  };
}

export default useSignUpMutation;
