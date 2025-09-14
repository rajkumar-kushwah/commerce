import React from 'react'
import Popler from '../Poplers/Popler'
import Offer from '../offers/offer'
import Newletter from '../Newsletters/Newsletter'
import NewCollections from '../NewCollects/NewCollections'
import Hero from '../Heros/Hero'
import Adata from '../Apidata/Adata'

function Shop() {
  return (
    <div>
        <Hero/>
        <Popler/>
        <Offer/>
       
        <NewCollections/>
        <Newletter/>
         <Adata/>
    </div>
  )
}

export default Shop