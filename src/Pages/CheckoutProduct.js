import React from 'react';
import { useStateValue } from './StateProvider';


const CheckoutProduct = ({id, title, image, rating, price}) => {

  const [{ basket }, dispatch] = useStateValue();

  const removeFromCart = () =>{
    dispatch({
      type: "Remove_from_Cart",
      id: id

      
    })
  }

    
  return (
    <>
      <div className='d-flex mb-3'>
        <div style={{width: '200px'}}>
          <img src={`/Images/${image}`} className='w-100' alt="Product" />
        </div>
        <div className='ms-4 mt-2'>
          <h4>{title}</h4>
          <span>$<strong>{price}</strong></span>
          <p>
          {Array(rating).fill().map((_, i) => (
                    <span key={i}>⭐</span>
                ))}

          </p>
          <button className='btn btn-sm rounded-0 btn-warning' onClick={removeFromCart}>Remove from Cart</button>
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
