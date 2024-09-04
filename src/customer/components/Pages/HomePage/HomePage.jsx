import React from 'react'
import MainCarousel from '../../MainCarousel/MainCarousel'
import HomeSectionCarousel from '../../HomeSectionCarousel/HomeSectionCarousel'
import { men_kurta } from '../../../../data/Men/men_kurta'
import { shoes } from '../../../../data/Men/shoes'
import { men_shirt } from '../../../../data/Men/men_shirt'
import { saree } from '../../../../data/Women/saree'
import { women_dress } from '../../../../data/Women/women_dress'
import Footer from '../../Footer/Footer'
import SimpleCarousel from '../../HomeSectionCarousel/SimpleCarousel'
import HomeSectionCarousel2 from '../../HomeSectionCarousel/HomeSectionCarousel2'



function HomePage() {
  return (
    <div>
      <MainCarousel />

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel2 data={men_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel2 data={shoes} sectionName={"Men's Shoes"} />
        <HomeSectionCarousel2 data={men_shirt} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel2 data={saree} sectionName={"Women's Saree"} />
        <HomeSectionCarousel2 data={women_dress} sectionName={"Women's Dress"} />
        {/* <SimpleCarousel data={men_kurta} sectionName={"Men's Kurta"}/> */}
      </div>

    </div>

  )
}

export default HomePage