// NewCollections.js
import React from 'react';
import { Link } from 'react-router-dom';
import { New__collecttions } from '../Heros/New__collections'; // Adjust path accordingly
import './NewCollections.css'

const NewCollections = () => {
  return (
    <div className="collections-container  ">
      {New__collecttions.map((item) => (
        <div key={item.id} className="collection-item ">
          <div className='all-deta flex gap-10 '>
     <Link to={`/product/${item.id}`}><img onClick={window.scrollTo(0,0)} src={item.image} alt={item.name} width={150} height={150} /></Link>  
          
          <div className=' ' >
          <h2>{item.name}</h2>
          <p>{item.description}</p>
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
            <strong>Sizes:</strong> {item.availableSizes.join(', ')}
          </p>
          <p>
            <strong>Colors:</strong> {item.colors.join(', ')}
          </p>
        </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default NewCollections;
