import './usercard.css';
import { Link } from 'react-router-dom';
import product from '../payge/product';
function Usercard({ id, name, image, newprice, oldprice, category,subcategory,description }) {
  return (
    <div key={id} className="usercard  flex-wrap w-80 px-4 items-center justify-center rounded-lg shadow-lg bg-gradient-to-r hover:via-purple-200 from-pink-100 to-indigo-300">
     <Link to={`/product/${id}`}> <img  src={image} alt={name} className="w-24 h-24 rounded-full object-cover mb-4" /></Link>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <div className="flex gap-3 m-4">
        <h1 className="text-lg font-bold text-gray-900">{newprice}</h1>
        <p className="font-light line-through text-gray-500">{oldprice}</p>
      </div>
       <div className="text-sm text-gray-700">
          <p className="font-medium">{category}</p>
          <p className="italic">{subcategory}</p>
          <p className="mt-2">{description}</p>
        </div>
    </div>
  );
}

export default Usercard;