import React, { useContext } from 'react'
import { ShopContext } from "../context/ShopContext";
import remove_icon from '../images/remove_icon.png'

function CardItem() {
const { all_product, removeCard, carditem,setTotalCardAmount } = useContext(ShopContext);

  return (
    <div className='carditem-header p-4'>
    <div className="carditem-format-main  flex flex-wrap p-5 items-center text-gray-600 font-medium uppercase mb-2">
<p className="flex">Products</p>
<p className="flex-1">Title</p>
<p className="w-24 text-center">Price</p>
<p className="w-20 text-center">Quantity</p>
<p className="w-24 text-center">Total</p>
<p className="w-12">Remove</p>
    </div>
    <hr className="mb-4"/>
  {all_product
     .filter((e) => carditem[e.id] > 0)
     .map((e) =>{
      
    return <div key={e.id} className="carditem-format  flex flex-col md:flex-row items-center  bg-white shadow rounded p-4 mb-4">
        <img className='cardicon-product-icon w-20 h-20 object-cover mr-4' src={e.image} alt="" />
        <p className="flex-1 text-gray-800 font-medium">{e.name}</p>
        <p className="w-24 text-center">${e.newprice}</p>
        <button className='carditem-quantity  w-20 text-center items-center rounded-2xl mb-3'>{carditem[e.id]}</button>
        <p className="w-24 text-center font-semibold">{ (Number(e.newprice.replace(/[^0-9.]/g, '')) || 0) * (carditem[e.id] || 0) }</p>
        <img className="w-5 h-5 cursor-pointer hover:text-red-500 " src={remove_icon} alt="" onClick={()=> removeCard(e.id)} />
    </div>
    
       
       
      
})}
<div className="carditem-doun flex flex-col md:flex-row justify-between">
  <div className="carditem-total bg-white shadow rounded p-6 w-full md:w-1/2">
    <h1 className='text-lg font-bold mb-4'>Card Totals</h1>
    <div className='space-y-2'>
      <div className="carditem-total-item flex justify-between">
        <p>SubTotal</p>
       <p>${setTotalCardAmount()}</p>
      </div>
      <hr />
      <div className="carditem-total-item flex justify-between">
        <p>Shippig Fee</p>
        <p  className="text-green-600">free</p>
      </div>
      <hr />
      <div className="carditem-total-item flex justify-between font-bold">
        <p>total</p>
        <p>${setTotalCardAmount()}</p>
      </div>
    </div>
    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">PROCEED TO CHEKOUT</button>
  </div>
  <div className="carditem-promocode bg-white shadow rounded p-6 w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
    <p>If you have a promo code, Enter is hare</p>
    <div className="carditem-promobox text-lg font-bold mb-2">
      <input type="text" placeholder='promo code'  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"/>
      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-blue-500 transition">submit</button>
    </div>
  </div>
</div>

    </div>
  )
}

    
export default CardItem