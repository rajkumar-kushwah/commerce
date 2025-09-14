import React, { useContext, useState } from 'react'
import { ShopContext } from "../Context/ShopContext"
import {useParams} from 'react-router-dom'
import BredCrum from '../BredCrums/BredCrum';
import ProductDisplay from '../products/ProductDisplay';
import Description from '../descriptions/Dscription';
import Reletedproduct from '../ReletedProducts/Reletedproduct';
function Product() {
  const {all_product} =useContext(ShopContext);
  const {productId} = useParams();
  const product= all_product.find((e)=> e.id === productId )
  return (
    <div>
      
     <BredCrum product={product}/>
     <ProductDisplay product={product}/>
     <Description/>
     <Reletedproduct/>
    </div>
  )
}

export default Product