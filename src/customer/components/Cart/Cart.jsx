import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'

function Cart() {
  return (
    <div>
      <div className='lg:grid grid-cols-3 lg:px-16 relative mt-5'>
      {/* ----------------------------products in the bag starts-------------------------- */}
        <div className='col-span-2'>
          {[1, 1, 1, 1, 1].map((item) => <div className='mb-5'>
            <CartItem />
          </div>)}
        </div>
      {/* ----------------------------products in the bag ends-------------------------- */}

      {/* ----------------------------products price details starts-------------------------- */}

        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>

          <div className='border rounded-lg p-5'>

            <p className='uppercase font-bold opacity-60 pb-4'>Price datails</p>

            <hr className='text-gray-300' />

            <div className='space-y-3 font-semibold mb-8'>

              <div className='flex justify-between'>
                <span>Price</span>
                <span>₹4697</span>
              </div>

              <div className='flex justify-between'>
                <span>Discount</span>
                <span className='text-green-600'>-₹3419</span>
              </div>

              <div className='flex justify-between'>
                <span>Delivery Charge</span>
                <span className='text-green-600 text-sm'>Free</span>
              </div>

              <hr />

              <div className='flex justify-between'>
                <span>Total Amount</span>
                <span className='text-green-600 font-bold'>₹1278</span>
              </div>

            </div>
            <Button variant='contained' className='w-full mt-5' sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}>
              Checkout
            </Button>
          </div>
        </div>

      {/* ----------------------------products price details ends-------------------------- */}




      </div>
    </div>
  )
}

export default Cart