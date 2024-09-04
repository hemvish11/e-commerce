import { Grid } from '@mui/material'
import React from 'react'

function Order() {
    const orderStatus = [
        {
            label: "On the way",
            value: "on_the_way"
        },
        {
            label: "Delivered",
            value: "delivered"
        },
        {
            label: "Cancelled",
            value: "cancelled"
        },
        {
            label: "Return",
            value: "return"
        },
    ]
    return (
        <div>
            <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item sx={2.5}>
                    <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                        <h1 className='font-bold text-lg'>Filter</h1>
                        <div className='space-y-4 mt-10'>
                            <h1 className='font-semibold'>ORDER STATUS</h1>
                            <div className='flex items-center'>
                                <input
                                    // defaultValue={option.value}
                                    className='h-4 w-4 border-gray-300 text-indigo-600
                                    focus:ring-indigo-500'
                                    type='checkbox'

                                />

                                {/* <label htmlFor={option.value}></label> */}
                            </div>

                        </div>
                    </div>
                </Grid>
                <Grid item sx={2.5}>

                </Grid>
            </Grid>
        </div>
    )
}

export default Order