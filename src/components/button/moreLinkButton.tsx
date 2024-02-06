import Link from 'next/link';

interface MoreLinkProps {
  isVisible: boolean;
}
function MoreLink({ isVisible }: MoreLinkProps) {
  if (!isVisible) return null;

  return (
    <Link
      className="absolute right-10 top-[-50px] cursor-pointer p-4 text-green mobile:hidden
        tablet:hidden"
      href="/custom">
      더보기
    </Link>
  );
}

export default MoreLink;
