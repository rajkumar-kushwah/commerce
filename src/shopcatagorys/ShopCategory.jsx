import React, { useContext } from "react";
import { ShopContext } from "../assets/components/context/ShopContext";
import './ShopCategory.css'
import arrow_down from '../images/arrow-down.png'
import { Link } from "react-router-dom";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category flex-col  flex  justify-center items-center pt-10 space-y-5   to-indigo-300">
      <img  src={props.banner} alt="Shop Banner" />
      <div className="shopcategory-shop flex flex-wrap  items-center gap-5 justify-center ">
        <p className=" sm:w-auto">
          <span> Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort border-1 rounded-2xl w-25  p-1  flex gap-2 ">
          sort by <img src={arrow_down} alt="" width={22}/>
        </div>
      </div>
      <div className="shopcategory-product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 p-5 w-full max-w-screen-lg ">
        {all_product
          .filter((item) => props.category === item.category)
          .map((item) => (
            <div key={item.id} className="product-card bg-white shadow-lg rounded-lg overflow-hidden">
              
              <div className="all-deta   flex gap-10 ">
                <div>
  <Link to={`/product/${item.id}`}> <img 
          onClick={window.scrollTo(0,0)} src={item.image}
                  alt={item.name}
                
                    className="w-100 h-48 object-cover"
                /></Link>  
               </div>
                <div className=" ">
                  <h2 className="font-bold">{item.name}</h2>
                  <p className="text-sm text-gray-700 italic">{item.description}</p>
                  <p>
                    <strong>New Price:</strong> {item.newprice}
                  </p>
                  <p>
                    <strong>Old Price:</strong> <s>{item.oldprice}</s>
                  </p>
                  <p>
                    <strong>Ratings:</strong> {item.ratings}⭐
                  </p>
                  <p>
                    <strong>Material:</strong> {item.material}
                  </p>
                  <p>
                    <strong>Sizes:</strong> {item.availableSizes.join(", ")}
                  </p>
                  <p>
                    <strong>Colors:</strong> {item.colors.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="shop_explore flex justify-center items-center m-12 bg-[#ededed] rounded-2xl w-50 font-light size-12 ">
        Explore More 
      </div>
    </div>
  );
};

export default ShopCategory;
