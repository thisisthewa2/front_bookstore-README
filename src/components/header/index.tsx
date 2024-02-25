import CartButton from '@/components/button/header/cartButton';
import MyPageButton from '@/components/button/header/myPageButton';
import SignInButton from '@/components/button/signInButton';
import SignOutButton from '@/components/button/signOutButton';
import BookmarkButton from '@/components/button/header/bookmarkButton';
import HeaderLayout from '@/components/layout/headerLayout';
import SignUpButton from '@/components/button/signUpButton';
import ReadMeButton from '@/components/button/header/readmeButton';
import useGetBasKetQuery from '@/hooks/useGetBasKetQuery';
import HeaderSearchInput from '../input/headerSearchInput';

export interface HeaderProps {
  isLoggedIn: boolean;
  numItemsOfCart?: number | undefined;
}

function Separator() {
  return (
    <div className="inline-block h-12 w-1 border-r border-gray-1 mobile:hidden" />
  );
}

// 로그인하지 않은 상태의 헤더
function NonLoggedInHeader() {
  return (
    <div
      className="z-10 mx-15 flex h-50 min-w-fit max-w-full items-center justify-between
        tablet:mx-30 tablet:h-100 pc:mx-60 pc:h-100">
      <ReadMeButton />
      <HeaderSearchInput />
      <div className="inline-flex items-center tablet:gap-40 pc:gap-40">
        <SignInButton />
        <SignUpButton />
      </div>
    </div>
  );
}

// 로그인한 상태의 헤더
function LoggedInHeader() {
  // authenticated 상태인 경우에만 useGetBasKetQuery() 호출
  const { data } = useGetBasKetQuery();
  return (
    <div
      className="relative z-10 mx-15 flex h-50 min-w-fit max-w-full items-center
        justify-between tablet:mx-30 tablet:h-100 pc:mx-60 pc:h-100">
      <ReadMeButton />
      <HeaderSearchInput />
      <div className="flex items-center gap-10 tablet:gap-20 pc:gap-20">
        <SignOutButton />
        <Separator />
        <BookmarkButton />
        <CartButton numItemsOfCart={data?.length} />
        <MyPageButton />
      </div>
    </div>
  );
}

// 헤더 컴포넌트
function Header({ isLoggedIn }: HeaderProps) {
  return isLoggedIn ? (
    <HeaderLayout isLoggedIn={isLoggedIn}>
      <LoggedInHeader />
    </HeaderLayout>
  ) : (
    <HeaderLayout isLoggedIn={isLoggedIn}>
      <NonLoggedInHeader />
    </HeaderLayout>
  );
}

export default Header;
