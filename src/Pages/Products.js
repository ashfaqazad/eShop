import React from 'react';
import { useStateValue } from './StateProvider';

const Products = ({ id, title, image, rating, price, imgStyle }) => {
    const [ state , dispatch ] = useStateValue();

    const addProduct = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image, // Corrected typo here
                rating: rating,
                price: price
            }
        });
    };

    return (
        <div className='d-flex flex-column p-2'>
            <h2>{title}</h2>
            <strong>{price}</strong>
            <p>
                {Array(rating).fill().map((_, i) => (
                    <span key={i}>⭐</span>
                ))}
            </p>
            <div className='d-flex flex-column align-items-center ms-5'>
                <img src={`/Images/${image}`} className='w-50 mt-1' alt={title} style={imgStyle} />
                <button className='btn btn-warning w-auto mt-3' onClick={addProduct}>Add Product</button>
            </div>
        </div>
    );
}

export default Products;
