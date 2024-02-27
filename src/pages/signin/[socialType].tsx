import { SocialType, getSocialLogin } from '@/api/social';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useEffect } from 'react';

function SocialPage() {
  const router = useRouter();
  const { socialType, code } = router.query;
  const myType: SocialType =
    socialType === 'kakao'
      ? 'KAKAO'
      : socialType === 'google'
        ? 'GOOGLE'
        : 'NAVER';

  const { data } = useQuery({
    queryKey: [''],
    queryFn: () => getSocialLogin(myType, code as string),
    enabled: !!socialType,
    retry: 3,
  });

  const handleSocialLogin = async () => {
    const result = await signIn('social-credentials', {
      email: data?.email,
      socialType: myType,
      memberId: data?.memberId,
      accessToken: data?.Authentication,
      redirect: false,
      callbackUrl: '/',
    });
    if (result && result?.url && typeof window !== 'undefined') {
      window.location.href = result.url;
    }
  };
  useEffect(() => {
    handleSocialLogin();
  }, []);
  return;
}

export default SocialPage;
