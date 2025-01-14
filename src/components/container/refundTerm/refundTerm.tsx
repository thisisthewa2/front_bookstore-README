/** 상품 상세페이지 하위에 들어갈 배송, 환불 규정
 *
 */

function StyledTitle({ title = '' }) {
  return <h3 className="text-16 font-bold text-gray-4">{title}</h3>;
}

function RefundTerm() {
  return (
    <section className="flex flex-col gap-40 mobile:gap-30">
      <h2 className="text-gray-7 text-20 font-bold">배송/교환/환불</h2>
      <article className="flex flex-col gap-30 mobile:gap-20">
        <div className="flex flex-col gap-8">
          <StyledTitle title="환불/교환 방법" />
          <p className="text-[13px] text-gray-4">
            "나의계정&gt;주문조회&gt;반품/교환신청", 1:1상담 &gt; 반품/교환 또는
            고객센터(1544-2514) 판매자 배송상품은 판매자와 반품/교환이 협의된
            상품에 한해 가능
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <StyledTitle title="환불/교환 가능 기간" />
          <p className="text-[13px] text-gray-4">
            o 변심반품 수령 후 20일(단, 중고매장 상품은 구매 후 구매 다음날로
            부터 7일, 회원직거래 중고상품은 출고일로 부터 구매확정 전 상태로
            6일, 전자책 단말기 등 전자제품은 수령 후 7일 이내 제품 포장
            미개봉시, eBook은 결제 후 다운로드 받지 않은 상태, 웹뷰어로 보거나
            듣지 않은 상태에서 20일 이내)
            <br /> <br />o 파본 등 상품결함 시 '문제점 발견 후 30일(단, 수령일로
            부터 3개월)' 이내
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <StyledTitle title="환불/교환 비용" />
          <p className="text-[13px] text-gray-4">
            o 변심 혹은 구매착오의 경우에만 반송료 고객 부담
            <br />o 해외직배송도서의 변심 혹 은 구매착오로 인한 취소/반품은
            판매가의 20% 취소수수료 고객 부
            <br />
            <br />* 취소수수료 : 수입제반비용(국내 까지의 운송비, 관세사비,
            보세창고료, 내륙 운송비, 통관비 등)과 재고리스크(미판매 리스크,
            환차손)에 따른 비용 등
            <br />
            단, 아래의 주문/취소 조건인 경우, 취소 수수료 면제
            <br /> - 오늘 00시~06시 주문을 오늘 06시 이전 취소
            <br /> - 오늘 06시 이후 주문 후 다음 날 06시 이전 취소
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <StyledTitle title="환불/교환 불가 사유" />
          <p className="text-[13px] text-gray-4">
            o 소비자의 책임 있는 사유로 상품 등이 손실 또는 훼손된 경우
            <br />o 소비자의 사용, 포장 개봉에 의해 상품 등의 가치가 현저히
            감소한 경우
            <br />
            예&#41; 전자책 단말기,가전제품, 래핑이 제거된
            만화책/라이트노벨/수험서/문제집류
            <br />o 복제가 가능 또는 단기간 내 완독 가능 상품의 자체 포장이나
            래핑을 훼손한 경우
            <br />
            예&#41; 음반,DVD,비디오,Blu-ray,소프트웨어, 잡지, 영상 화보집
            <br />o 소비자 요청에 의한 주문 제작 상품(분철도서, POD 도서 등)
            <br />o 세트 상품 일부만 반품 불가(전체 반품 후 낱권 재구매)
            <br />o 디지털 컨텐츠인 eBook, 오디오북 등을 1회 이상 다운로드
            받았거나 웹뷰어로 보기 혹은 듣기를 한 경우
            <br />o 대여 기간이 종료된 eBook, 오디오북 대여제 상품
            <br />o 신선도 문제로 일정 기한 경과 시 상품 가치가 현저하게
            감소하는 상품 (원두, 콜드브루, 드립백 등)
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <StyledTitle title="소비자 피해보상 환불지연에 따른 배상" />
          <p className="text-[13px] text-gray-4">
            o 상품의 불량에 의한 반품, 교환, A/S, 환불, 품질보증 및 피해보상
            등에 관한 사항은 소비자분쟁해결기준 (공정거래위원회 고시)에 준하여
            처리됨
            <br />o 대금 환불 및 환불 지연에 따른 배상금 지급 조건, 절차 등은
            전자상거래 등에서의 소비자 보호에 관한 법률에 따라 처리함
          </p>
        </div>
      </article>
    </section>
  );
}

export default RefundTerm;
