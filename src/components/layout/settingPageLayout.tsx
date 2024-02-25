import { ReactNode } from 'react';
import ScrollToTopButton from '@/components/button/scrollToTopButton';
import MainLayout from './mainLayout';

interface SettingPageLayoutProps {
  main: ReactNode;
  isTopButton?: boolean;
}

function SettingPageLayout({ main, isTopButton }: SettingPageLayoutProps) {
  return (
    <MainLayout>
      <div role="content" className="flex-center pb-40">
        {main}
      </div>
      {isTopButton && <ScrollToTopButton />}
    </MainLayout>
  );
}

export default SettingPageLayout;
