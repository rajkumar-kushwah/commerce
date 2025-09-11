import React from 'react';
import { Link } from 'react-router-dom';
import { all_product } from '../Heros/All_product';

function Reletedproduct() {
  return (
    <div className="reletedpoduct p-5 w-full max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold underline text-center my-5">Related Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {all_product.map(item => (
          <div key={item.id} className="collection-item border rounded-lg p-4 flex flex-col gap-3">
            <Link
              to={`/product/${item.id}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex justify-center"
            >
              <img src={item.image} alt={item.name} width={150} height={150} />
            </Link>
            <div className="text-center flex flex-col gap-1">
              <h2 className="font-semibold">{item.name}</h2>
              <p>{item.description}</p>
              <p><strong>New Price:</strong> {item.newprice}</p>
              <p><strong>Old Price:</strong> <s>{item.oldprice}</s></p>
              <p><strong>Ratings:</strong> {item.ratings}⭐</p>
              <p><strong>Material:</strong> {item.material}</p>
              <p><strong>Sizes:</strong> {item.availableSizes.join(', ')}</p>
              <p><strong>Colors:</strong> {item.colors.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reletedproduct;
