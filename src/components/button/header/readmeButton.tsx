import Link from 'next/link';

function ReadMeButton() {
  return (
    <Link
      className="text-18 font-bold text-green tablet:text-24 pc:text-24"
      href="/">
      Read Me
    </Link>
  );
}
export default ReadMeButton;
