import React from 'react'
import exclusiveimage from '../images/exclusive-image.jpg'
import './offer.css'
function Offer() {
  return (
    <div className='offers '>
<div className='offers-left '>
<h1>Exclisive</h1>
<h1>offers for you</h1>
<p>ONLY ON BEST SELERS PRODUCTS</p>
<button>Chek New</button>
</div>
<div className='offers-right'>
<img src={exclusiveimage} alt=""/>
</div>
    </div>
  )
}

export default Offer