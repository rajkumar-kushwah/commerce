import React from 'react'
import './Newletter.css'


function Newletter() {
  return (
    <div className='newsletter-container'>
<h1>Get Exclusive Offers on your Email </h1>
<p>Subscribe to our newsletter and say updated</p>
<div className="subscription-form">
  <input type="email"  id="email"  placeholder='your Email id'/>
  <button>Subscribe</button>
</div>
    </div>
  )
}

export default Newletter