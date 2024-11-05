import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <>
            <div>
                <div className='w-100'>
                    <img
                        src="/Images/E-image2.webp"
                        alt="eCommerce"
                        style={{ width: "100%", height: "400px" }}
                    />
                </div>

                <div className='products bg-light p-3'>
                    <div className='p-3 d-flex'>
                        <div className='w-50 p-2 bg-white m-2'>
                            <Products 
                            id = {1223}
                            title = {'This is a i5 8th Generation (PC) '}
                            image = {'laptop-2.jpg'}
                            rating = {4}
                            price = {240}
                            />
                        </div>

                        <div className='w-50 p-2 bg-white m-2'>
                        <Products 
                            id = {1111}
                            title = {'This is the Conformt Chair'}
                            image = {'Chair.webp'}
                            rating = {5}
                            price = {5000}
                            />
                        </div>
                    </div>
                </div>


                <div className='products bg-light p-3'>
                    <div className='p-3 d-flex'>
                        <div className='p-2 bg-white m-2 col'>
                        <Products 
                            id = {2222}
                            title = {'This is the Watch for men'}
                            image = {'watch.webp'}
                            rating = {3}
                            price = {10000}
                            />
                        </div>

                        <div className='p-2 bg-white m-2 col'>
                        <Products 
                            id = {3333}
                            title = {'This is the t-shirt for men'}
                            image = {'t-shirt.webp'}
                            rating = {3}
                            price = {500}
                            />
                        </div>

                        <div className='p-2 bg-white m-2 col'>
                        <Products 
                            id = {1223}
                            title = {'This is Shirt for men'}
                            image = {'shirts.webp'}
                            rating = {4}
                            price = {1000}
                            />


                        </div>
                    </div>

                    <div className='p-3'>
                        <div className='p-2 bg-white m-2 d-flex justify-content-center'>
                        <Products 
                            id = {1223}
                            title = {'This is Leather Jaket for men'}
                            image = {'jaket.webp'}
                            rating = {4}
                            price = {240}
                            />
                        </div>
                    </div>


                </div>




            </div>
        </>
    )
}

export default Home