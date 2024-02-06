import { THOUSAND_UNIT } from 'src/constants/price';

interface BookPriceProps {
  price: number;
}

function BookPrice({ price }: BookPriceProps) {
  return (
    <div className="text-black text-14 font-bold mt-4">
      {price.toString().replace(THOUSAND_UNIT, ',')}
    </div>
  );
}

export default BookPrice;
