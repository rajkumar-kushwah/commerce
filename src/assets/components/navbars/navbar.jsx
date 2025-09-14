import React, { useContext } from 'react'
import { useState } from "react";
import trorly from '../images/trorly.png'
import Ecommers from "../images/Ecommers.webp";
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ShopContext } from '../Context/ShopContext';




function Navbar() {
      const { count } = useContext(ShopContext)
  const [Menu, setMenu] =useState("shop")

 
  return (
    
<nav className=' bg-white  fixed top-0 left-0 right-0 z-50 pt-3 shadow-2xs'>
  <div className='flex justify-around items-center w-full '>
        <div className='flex items-center'>
          <img className='w-20' src={Ecommers} alt="" />
          <p className="text-black text-xl font-semibold ">SHOPPER</p>
        </div>
        <ul className="nav-manu flex items-center gap-10 ">
          <li onClick={()=> {setMenu("Shop")}} ><Link to='/'>Shop</Link>{Menu === "Shop" ? <hr className="text-red-950 h-0.5 bg-red-900 font-light  rounded-2xl border-none w-7" />:<></>} </li >
          <li onClick={()=> {setMenu("Men")}}><Link to="/Men">Mens</Link> {Menu === "Men" ? <hr className="text-red-950 h-0.5 bg-red-900 font-light  rounded-2xl border-none w-7" />:<></>}</li >
          <li onClick={()=> {setMenu("Woman")}}><Link to="/Woman">Women</Link>{Menu === "Woman" ? <hr className="text-red-950 h-0.5 bg-red-900 font-light  rounded-2xl border-none w-7" />:<></>}</li>
          <li onClick={()=> {setMenu("Kid")}}><Link to="/Kid">Kids</Link>{Menu === "Kid" ? <hr className="text-red-950 h-0.5 bg-red-900 font-light  rounded-2xl border-none w-7" />:<></>}</li>
        </ul>

        <div className="login-card font-mono flex items-center gap-5">
          <Link to='/login'>
          <button  className="btn w-20 h-8 border-1 rounded-2xl bg-amber-100"  > 
            Login
          </button>
          </Link>
         <Link to='/card'><img className='w-10 bg-white rounded-4xl '  src={trorly} alt="" /></Link>
          <div  className="nav-card-count bg-red-600 rounded-4xl flex w-6 h-6 mt-[-35px] ml-[-40px] justify-center items-center text-white " >{count}</div>
        </div>
      </div>
      </nav>
   
  )
}

export default Navbar