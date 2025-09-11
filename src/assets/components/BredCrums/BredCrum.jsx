import React from 'react'
import product from '../payge/product'
import right_arrow from '../images/right-arrow.png'

function BredCrum(props) {
  const {product} = props;
  return (
    <div className='flex gap-4 mt-5 mb-5 flex-wrap capitalize justify-center'>
Home <img src={right_arrow} alt=""   height={5}/>
shop<img src={right_arrow} alt="" height={10}/>{product.category}
<img src={right_arrow} alt="" height={10}/>{product.name}
<img src={right_arrow} alt="" height={10}/>

    </div>
  )
};

export default BredCrum