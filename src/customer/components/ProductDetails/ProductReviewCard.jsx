import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

function ProductReviewCard() {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className='text-white' sx={{ width: 57, height: 57, bgcolor: "#9155fd" }} />
                    </Box>
                </Grid>

                <Grid item xs={9}>
                    <div className='space-y-2'>
                        <div>
                            <p className='font-semibold text-lg'>Ram</p>
                            <p className='opacity-70'>January 22, 2024</p>
                        </div>
                    </div>

                    <Rating value={4.5} name='half-rating' readOnly precision={0.5}/>
                    <p>Nice shirt, I love this shirt</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductReviewCard