import OrderDate from '@/components/container/orderDate/orderDate'
import DropDown from '@/components/dropDown/dropDown'
import React, { useState } from 'react'

function dropDownTest() {  
  const [selectedItem, setSelectedItem] = useState('전체보기');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const onSelectedItem = (menu: string) => { setSelectedItem(menu) }
  const onStartDate = (startDate:Date) => {setStartDate(startDate)}  
  const onEndDate = (endDate:Date) => {setEndDate(endDate) }

  const menus = [
    "전체보기",
    "최근 1개월", 
    "최근 3개월", 
    "최근 6개월", 
    "최근 1년", 
    "직접 입력"
  ]
  const person = {
    id:1,
    name: "yuna", 
    isPurchased: false, 
    firstPurchasedDate: new Date().toString()
  }   

  return (
    <div className="flex relative">
      <div className="w-[1000px]">
        <DropDown menus={menus} selectedItem={selectedItem} onSelectedItem={onSelectedItem} />       
      </div>
      <div className="flex-center">
        {person && (
        <OrderDate
          pastDate={selectedItem}
          startDate={startDate}
          endDate={endDate}
          setSelectedItem={setSelectedItem}
          setStartDate={onStartDate}
          setEndDate={onEndDate}
          person={person}
        />
        )}   
        </div>
    </div>
  )
}

export default dropDownTest
