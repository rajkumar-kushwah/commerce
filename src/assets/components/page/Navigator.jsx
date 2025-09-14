
import Navbar from '../navbars/navbar';
import {BrowserRouter ,Link, Routes,Route} from "react-router-dom"
import Shop from "./Shop";
import LoginSinup from "./LoginSinup";
import ShopCategory from './ShopCategory.jsx';
import Cart from './Card.jsx';
import Footer from '../footers/footer.jsx';
import men_banner from '../images/men_banner.jpg'
import woman_banner from '../images/woman_banner.avif'
import kid_banner from '../images/kid_banner.jpg'
import Product from "./product.jsx";

function Navigator() {
  
  return (
    <div >
      
  <BrowserRouter>

 <Navbar/>
         <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/Men' element={<ShopCategory banner={men_banner} category="Men" />}/>
          <Route path='/Woman' element={<ShopCategory banner={woman_banner} category="Women"  />}/>
          <Route path='/kid' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
          <Route path='/product' element={<Product />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path="/card" element={<Cart/>}/>
            <Route path="/login" element={<LoginSinup/>}/>
         </Routes>
         <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default Navigator;
