import Link from 'next/link';

interface MoreLinkProps {
  isVisible: boolean;
}
function MoreLink({ isVisible }: MoreLinkProps) {
  if (!isVisible) return null;

  return (
    <Link
      className="mobile:hidden tablet:hidden text-green absolute top-[-50px] right-10 p-4
        cursor-pointer"
      href="/custom">
      더보기
    </Link>
  );
}

export default MoreLink;
