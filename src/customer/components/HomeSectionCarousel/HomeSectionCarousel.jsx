import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

const responsive = {
  0: { items: 1 },
  720: { items: 3 },
  1024: { items: 4 },
};

function HomeSectionCarousel({ data, sectionName }) {
  //carousal starts from ativeIndex
  const [activeIndex, setActiveIndex] = useState(0);

  const slideLeft = () => setActiveIndex(activeIndex - 1);
  const slideRight = () => setActiveIndex(activeIndex + 1);

  const changeActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0, 10).map((item) => {
    return (<div className='flex justify-center'>
      <HomeSectionCard product={item} />
    </div>)
  });

  return (
    <div className='border rounded-md'>
      <h2 className='text-2xl font-extrabold text-gray-800 py-5 sectionName'>{sectionName}</h2>
      <div className='relative p-5'>
        <AliceCarousel
          items={items}
          // disableButtonsControls
          responsive={responsive}
          // disableDotsControls
          // slide should change when there is change in active index
          onSlideChanged={changeActiveIndex}
          // activeIndex = start from which photo
          activeIndex={activeIndex}
        />

        {/* right button */}


        {activeIndex !== items.length - 4 && <Button variant='contained'
          className='z-50 bg-white'
          onClick={slideRight}
          sx={{
            position: 'absolute',
            top: '8rem',
            right: '0rem',
            transform: 'translateX(50%) rotate(90deg)',
            bgcolor: 'white'
          }}
          aria-level='next'  >
          <KeyboardArrowLeftIcon
            sx={{
              transform: "rotate(90deg)",
              color: "black"
            }} />
        </Button>}

        {/* left button */}

        {activeIndex !== 0 && <Button variant='contained'
          className='z-50 bg-white'
          onClick={slideLeft}
          sx={{
            position: 'absolute',
            top: '8rem',
            left: '0rem',
            transform: 'translateX(-50%) rotate(-90deg)',
            bgcolor: 'white'
          }}
          aria-level='next'  >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", 
            color: "black" }} />
        </Button>}



      </div>
    </div>
  )
}

export default HomeSectionCarousel