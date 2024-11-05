import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';


const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();

    return (

        <>
            <div className='container-fluid'>
                <div className='row mt-2 min-vh-100'>
                    <div className='col-9'>
                        <img src="/Images/Amazon.webp" className='w-100' style={{ height: '200px' }} alt="" />
                        <div className='mt-2'>
                            <h2>Your Shorping Cart</h2>

                            {basket.map(item =>(
                                <CheckoutProduct
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                rating = {item.rating}
                                price = {item.price}

                                />
                            ))}

                        </div>
                    </div>
                    <div className='col-3'>
                        <Subtotal />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout