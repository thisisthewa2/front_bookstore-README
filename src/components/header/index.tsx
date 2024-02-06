import CartButton from '@/components/button/header/cartButton';
import SearchInput from '@/components/input/searchInput';
import MyPageButton from '@/components/button/header/myPageButton';
import SignInButton from '@/components/button/signInButton';
import SignOutButton from '@/components/button/signOutButton';
import BookmarkButton from '@/components/button/header/bookmarkButton';
import HeaderLayout from '@/components/layout/headerLayout';
import SignUpButton from '@/components/button/signUpButton';
import ReadMeButton from '../button/header/readmeButton';

export interface HeaderProps {
  isLoggedIn: boolean;
  numItemsOfCart?: number;
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
      <SearchInput />
      <div className="inline-flex items-center tablet:gap-40 pc:gap-40">
        <SignInButton />
        <SignUpButton />
      </div>
    </div>
  );
}

// 로그인한 상태의 헤더
function LoggedInHeader({ numItemsOfCart }: { numItemsOfCart: number }) {
  return (
    <div
      className="relative z-10 mx-15 flex h-50 min-w-fit max-w-full items-center
        justify-between tablet:mx-30 tablet:h-100 pc:mx-60 pc:h-100">
      <ReadMeButton />
      <SearchInput />
      <div className="flex items-center gap-10 tablet:gap-20 pc:gap-20">
        <SignOutButton />
        <Separator />
        <BookmarkButton />
        <CartButton numItemsOfCart={numItemsOfCart} />
        <MyPageButton />
      </div>
    </div>
  );
}

// 헤더 컴포넌트
function Header({ isLoggedIn, numItemsOfCart }: HeaderProps) {
  return isLoggedIn && numItemsOfCart ? (
    <HeaderLayout isLoggedIn={isLoggedIn}>
      <LoggedInHeader numItemsOfCart={numItemsOfCart} />
    </HeaderLayout>
  ) : (
    <HeaderLayout isLoggedIn={isLoggedIn}>
      <NonLoggedInHeader />
    </HeaderLayout>
  );
}

export default Header;
