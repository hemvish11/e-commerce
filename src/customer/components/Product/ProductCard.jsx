import React from 'react'
import "./ProductCard.css"

function ProductCard({ product }) {
    return (
        <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
            {/*--------------------------- Image Starts---------------------------------------- */}

            <div className='h-[20rem]'>
                <img className='h-full w-full object-cover object-left-top '
                    alt='' src={product.imageUrl} />
            </div>

            {/*--------------------------- Image Ends---------------------------------------- */}



            {/*--------------------------- Description Starts---------------------------------------- */}

            <div className='textPart bg-white p-3'>

                <div>
                    {/* brand */}
                    <p className='font-bold opacity-60'>{product.brand}</p>

                    {/* Title */}
                    <p>{product.title}</p>
                </div>

                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>₹{product.discountedPrice}</p>
                    <p className='line-through opacity-50'> ₹{product.price}</p>
                    <p className='text-green-600 font-semibold'>{product.discountPercent}% off</p>
                </div>

            </div>

            {/*--------------------------- Description Ends---------------------------------------- */}



        </div>
    )
}

export default ProductCard