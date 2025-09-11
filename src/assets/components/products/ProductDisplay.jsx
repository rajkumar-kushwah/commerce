import React, { useContext, useState } from 'react'
import product from '../payge/product'
import './ProductDisplay.css'
import star from '../images/star.png'
import star_dull from '../images/star_dull.png'
import { ShopContext } from "../context/ShopContext";
function ProductDisplay(props) {
    const {product} = props;
    const {addTocard} =useContext(ShopContext)

 
  return (
    <div className='productdiplay mx-auto p-6 flex flex-col md:flex-row gap-6 max-w-screen-xl '>
<div className='productdisplay-left flex  gap-4 '>
    <div className="productdisplay-img-list w-25 gap-5">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
    </div>
   
<div className='productdisplay-all-detail flex gap-4'>
    <div className='productdisplay-main-img w-full md:w-96 object-cover rounded shadow-lg'>
      <img src={product.image} alt=""width={400} /></div>
      <div className=' '>
   <h1 className=' font-bold text-2xl'>{product.name}</h1>
   <div className='product-start-group flex gap-4'>
    <img src={star} alt="" />
    <img src={star} alt="" />
    <img src={star} alt="" />
    <img src={star} alt="" />
    <img src={star_dull} alt="" />
   </div>
   <div> 
     <p>(130)</p>
   </div>
   <div className="productdisplay-right-prince flex-col gap-2 flex">
    <div className="productdisplay-right-oldprice text-lg text-gray-500 line-through">
      ${product.oldprice}
    </div>
    <div className="productdiplay-right-newprice text-xl text-green-500">
      ${product.newprice}
    </div>
    <div className="product right-description text-sm text-gray-700">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Voluptatem, corrupti possimus eveniet odio porro laboriosam animi dignissimos id,
       quas iste ipsam reiciendis eaque error esse fugiat totam accusamus consequatur optio.
    </div>
    <div className="productdisplay-right-size font-bold ">
      <h1>Select Size</h1>
    </div>
    <div className="productdisplay-right-size  ">
      <div>S</div>
      <div>M</div>
      <div>L</div>
      <div>XL</div>
      <div>XXL</div>
    </div>
   </div>
   <button className='border-1 p-2 rounded-full text-xl mt-5 mb-5 text-white bg-green-400 hover:bg-red-400 cursor-pointer delay-200 duration-300' onClick={()=>{addTocard(product.id)}}>ADD TO CART</button>
    <div className="productdisplay-right-category">
      <span>category:{product.category}-<span>  {product.name}.Crop Top</span></span>
    </div>
  <span>tags:<span> Modern, Latest Trend Shirt </span></span>
  </div>
</div>

</div>
    </div>
  )
}

export default ProductDisplay