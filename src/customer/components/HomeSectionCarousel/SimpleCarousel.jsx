import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



const items = [
  <div className="item" key="1">1</div>,
  <div className="item" key="2">2</div>,
  <div className="item" key="3">3</div>,
  <div className="item" key="4">4</div>,
  <div className="item" key="5">5</div>,
];

const responsive = {
  0: { items: 1 },
  768: { items: 3 },
};

const SimpleCarousel = () => {
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

  const renderPrevButton = ({ isDisabled }) => (
    <IconButton
      aria-label="Previous"
      disabled={isDisabled}
      onClick={slidePrev}
      style={{ position: 'absolute', left: '10px', zIndex: 1 }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );

  const renderNextButton = ({ isDisabled }) => (
    <Button variant='contained'
          className='z-50 bg-white'
          onClick={slideNext}
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
      </Button>
  );

  return (
    <AliceCarousel
      items={items}
      responsive={responsive}
      renderPrevButton={renderPrevButton}
      renderNextButton={renderNextButton}
      activeIndex={currentIndex}
      onSlideChanged={event => setCurrentIndex(event.item)}
    />
  );
};

export default SimpleCarousel;