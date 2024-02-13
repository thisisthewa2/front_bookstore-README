import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef } from 'react';
import ko from 'date-fns/locale/ko';
import Image from 'next/image';
import { getDateAgo } from '@/utils/getTimeAgo';
import { Person } from '@/types/orderDateType';

export type OrderDateProps = {
  pastDate: string;
  startDate: Date;
  endDate: Date;
  setSelectedItem: Dispatch<SetStateAction<string>>;
  setStartDate: (startDate:Date)=> void
  setEndDate: (endDate:Date)=> void  
  person: Person;
};

const CustomOrderInput = forwardRef(function MyInput(props: any, ref) {
  return (
    <div className="flex-center h-42 w-135 rounded-[5px] border-2 border-solid border-gray-1 px-9">
      <input
        {...props}
        ref={ref}
        className="w-1 flex-1 text-center focus:outline-none"
        readOnly
      />
      <Image src="/icons/Calendar.svg" width={20} height={20} alt="달력" />
    </div>
  );
});

function OrderDate({ person, pastDate, startDate, endDate, setSelectedItem, setStartDate, setEndDate}: OrderDateProps) {

  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const aMonthAgo = getDateAgo(30);
  const threeMonthAgo = getDateAgo(90);
  const sixMonthAgo = getDateAgo(180);
  const aYearAgo = getDateAgo(365);

  const selectedAgo = [
    ['전체보기', endDate],
    ['최근 1개월', aMonthAgo],
    ['최근 3개월', threeMonthAgo],
    ['최근 6개월', sixMonthAgo],
    ['최근 1년', aYearAgo],
    ['직접 입력', endDate],
  ];

  const findMonthAgo = useMemo(
    () => selectedAgo.find((item) => item[0] === pastDate)![1],
    [pastDate],
  );

  useEffect(() => {
    if (pastDate !== '직접 입력') {
      setStartDate(new Date(findMonthAgo));
      setEndDate(new Date());
    }
    if (pastDate === '직접 입력') {
      setStartDate(new Date());
      setEndDate(endDate);
    }
    if (pastDate === '전체보기') {
      if (!person.isPurchased) {
        setStartDate(new Date());
        setEndDate(new Date());
      } else if (person.isPurchased === true) {
        setStartDate(new Date(person.firstPurchasedDate));
        setEndDate(new Date());
      }
    }
  }, [pastDate]);

  useEffect(() => {
    if (startDate.getTime() > endDate.getTime()) {
      setStartDate(endDate);
    }
  });
  return (
    <div className="flex items-center">
      <DatePicker
        locale={ko}
        selected={startDate}
        dateFormat="yy.MM.dd"
        onChange={(date) => {
          date && setStartDate(date);
          setSelectedItem('직접 입력');
        }}
        customInput={<CustomOrderInput ref={startDateRef} />}
      />
      <span className="mx-6"> ~ </span>
      <DatePicker
        locale={ko}
        selected={endDate}
        dateFormat="yy.MM.dd"
        onChange={(date) => {
          date && setEndDate(date);
          setSelectedItem('직접 입력');
        }}
        customInput={<CustomOrderInput ref={endDateRef} />}
      />
    </div>
  );
}

export default OrderDate;
