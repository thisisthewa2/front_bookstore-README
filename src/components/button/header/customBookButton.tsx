import Link from 'next/link';
interface CustomBookProps {
  isLoggedIn: boolean;
}
function CustomBookButton({ isLoggedIn }: CustomBookProps) {
  if (isLoggedIn) return <Link href="/custom">맞춤도서</Link>;
  else return <Link href="/signin">맞춤도서</Link>;
}

export default CustomBookButton;
