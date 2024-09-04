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

function HomeSectionCarousel2({ data, sectionName }) {
  //carousal starts from ativeIndex
  const [currentIndex, setCurrentIndex] = useState(0);


  const slidePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const renderPrevButton = () => (
    currentIndex !== 0 && <Button variant='contained'
      className='z-50 bg-white'
      onClick={slidePrev}
      sx={{
        position: 'absolute',
        top: '8rem',
        left: '0rem',
        transform: 'translateX(-50%) rotate(-90deg)',
        bgcolor: 'white'
      }}
      aria-level='next'  >
      <KeyboardArrowLeftIcon
        sx={{
          transform: "rotate(90deg)",
          color: "black"
        }} />
    </Button>
  );

  const renderNextButton = () => (
    currentIndex !== items.length - 4 && <Button variant='contained'
      className='z-50 bg-white'
      onClick={slideNext}
      sx={{
        position: 'absolute',
        top: '8rem',
        right: 0,
        transform: 'translateX(50%) rotate(-90deg)',
        bgcolor: 'white'
      }}
      aria-level='next'  >
      <KeyboardArrowLeftIcon
        sx={{
          transform: "rotate(-90deg)",
          color: "black"
        }} />
    </Button>
  );

  const items = data.slice(0, 15).map((item) => {
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
          responsive={responsive}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
          currentIndex={currentIndex}
          onSlideChanged={event => setCurrentIndex(event.item)}
          disableDotsControls
        />

      </div>
    </div>
  )
}

export default HomeSectionCarousel2