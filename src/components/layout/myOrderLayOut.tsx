import { ReactNode } from 'react';

interface MyOrderPageLayoutProps {
  header?: ReactNode;
  overview: ReactNode;
  orderDate?: ReactNode;
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
      <div role="container">
        <div role="header">{header}</div>
        <div className="mx-auto flex max-w-[1080px] flex-col items-center px-40 py-60">
          <div
            role="overview"
            className="mb-40 w-[1080px] mobile:w-330 tablet:w-[688px]">
            {overview}
          </div>
          <div role="order-date" className="mb-20">
            {orderDate}
          </div>
          <div role="content" className="">
            {main}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyOrderPageLayout;
