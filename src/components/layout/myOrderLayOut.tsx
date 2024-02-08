import { ReactNode } from 'react';

interface MyOrderPageLayoutProps {
  header: ReactNode;
  overview: ReactNode;
  orderDate: ReactNode;
  main: ReactNode;
}

function MyOrderPageLayout({
  header,
  overview,
  orderDate,
  main,
}: MyOrderPageLayoutProps) {
  return (
    <>
      <div
        role="container"
        className="basis-0pxr flex w-full shrink-0 grow flex-col overflow-hidden">
        <div role="header">{header}</div>
        <div role="overview">{overview}</div>
        <div role="order-date">{orderDate}</div>
        <div role="content">{main}</div>
      </div>
    </>
  );
}

export default MyOrderPageLayout;
