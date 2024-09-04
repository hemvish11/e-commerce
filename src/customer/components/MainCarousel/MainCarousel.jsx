import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData.js';


const items = MainCarouselData.map((item) => {
    return (
        <div className='flex justify-center'>
            <img src={item.image1} className='cursor-pointer' role='presentation' alt='lehenga' width="33.33%" />
            <img src={item.image2} className='cursor-pointer' role='presentation' alt='lehenga' width="33.33%" />
            <img src={item.image3} className='cursor-pointer' role='presentation' alt='lehenga' width="33.34%" />
        </div>)
});


const MainCarousel = () => (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2500}
        infinite
    />
);

export default MainCarousel;