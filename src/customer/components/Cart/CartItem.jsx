import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, IconButton } from '@mui/material'
import React from 'react'

function CartItem() {
    return (
        <div className='border rounded-lg shadow-lg p-5'>

            <div className='flex items-center'>
                {/* image */}
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img
                        className='h-full w-full object-cover object-top'
                        src='https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70' />
                </div>
                {/* info */}
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>Men Printed Pure Cotton Straight Kurta</p>
                    <p className='opacity-70'>Size : L,White</p>
                    <p className='opacity-70 mt-2'>Seller: Crishtaliyo 2fashion</p>

                    <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                        <p className='opacity-50 line-through'>₹211</p>
                        <p className='font-semibold'>₹199</p>
                        <p className='text-green-600 font-semibold'>5% off</p>
                    </div>
                </div>


            </div>

            {/* + -  */}
            <div className='lg:flex items-center lg:space-x-10 pt-4'>

                <div className='flex items-center space-x-2'>

                    <IconButton >
                        <RemoveCircleOutlineIcon />
                    </IconButton>

                    <span className='border rounded-sm px-7 py-1 '>3</span>

                    <IconButton sx={{ color: "#9155fd" }}>
                        <AddCircleOutlineIcon />
                    </IconButton>

                </div>

                <div>
                    <Button sx={{ color: "#9155fd" }}>
                        remove
                    </Button>
                </div>

            </div>

        </div>
    )
}

export default CartItem