import { ReactNode } from 'react';
import ScrollToTopButton from '../button/scrollToTopButton';

interface SettingPageLayoutProps {
  header: ReactNode;
  main: ReactNode;
  isTopButton?: boolean;
}

function SettingPageLayout({
  header,
  main,
  isTopButton,
}: SettingPageLayoutProps) {
  return (
    <div role="container" className="flex flex-col gap-40">
      <div role="header">{header}</div>
      <div role="content" className="flex-center pb-40">
        {main}
      </div>
      {isTopButton && <ScrollToTopButton />}
    </div>
  );
}

export default SettingPageLayout;
