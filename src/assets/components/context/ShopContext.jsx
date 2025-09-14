import { createContext, useState } from "react";
import { all_product } from "../Heros/All_product";
import CardItem from "../carditems/CardItem";
import Product from "../page/product";

export const ShopContext = createContext(null);
const getDefaultCard=()=>{
  let card ={};
  for(let index=0; index<all_product.length; index++){
    card[ all_product[index].id ] = 0
  }
  return card;
}
const ShopContextProvider =(props)=>{
  const [carditem, setcarditem] = useState(getDefaultCard())
   const [count, setCartCount] = useState(0)

  const addTocard=(itemId)=>{
    setcarditem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(carditem),
    setCartCount(prev => prev + 1)
  }

    const removeCard=(itemId)=>{
    setcarditem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
       setCartCount(prev => prev - 1)
  }

const setTotalCardAmount = () => {
  let totalAmount = 0;
  for (const itemId in carditem) {
  if (carditem[itemId] > 0){
    let itemInfo =all_product.find((product)=>product.id === Number[itemId])
    if (!itemInfo) continue;  
    totalAmount+= itemInfo.newprice * carditem[itemId] || 0;
  }
  }

  return totalAmount;
};


  const contextValue ={setTotalCardAmount,all_product,carditem, addTocard, removeCard, count};

  return(
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;