import React from 'react'
import { useStateValue } from './StateProvider';
import { total } from './Reducer';


const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();


    return (
        <>
            <div>
                <p>Subtotal ({basket.legnth} items): <strong>${total(basket)}</strong></p>
                <input type="checkbox" /> This is contains gift
                <button className='btn btn-warning rounded-0 mt-2'>Proceed to Checkout</button>
            </div>
        </>
    )
}

export default Subtotal