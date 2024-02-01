import Link from 'next/link';

function ReadMeButton() {
  return (
    <Link
      className="text-18 pc:text-24 text-green font-bold tablet:text-24"
      href="/">
      Read Me
    </Link>
  );
}
export default ReadMeButton;
