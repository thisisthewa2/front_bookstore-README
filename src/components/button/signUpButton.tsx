import Link from 'next/link';
function SignUpButton() {
  return (
    <Link href="/signup" className="mobile:hidden">
      <div className="cursor-pointer text-15 ">회원가입</div>
    </Link>
  );
}
export default SignUpButton;
