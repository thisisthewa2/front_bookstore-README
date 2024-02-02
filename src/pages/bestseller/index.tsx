import Header from '@/components/header';
import BestSellerPageLayout from '@/components/layout/bestSellerLayout';

function BestSeller() {
  return (
    <div>
      <BestSellerPageLayout
        header={<Header isLoggedIn={true} />}
        // sideBar={ }
        // main={ }
      />
    </div>
  );
}

export default BestSeller;
