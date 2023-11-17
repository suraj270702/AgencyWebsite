import React from 'react'
import bannerImg from '../assets/undraw_fashion_blogging_re_fhi5 1.png'
import Banner from '../shared/Banner'

const Home = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
        
        <Banner heading='Develop yours skills without diligence' subHeading='A good example of paragraph contains a topic sentence, details and conclusion. There are many different kinds of animals that live in china' banner={bannerImg} btn1="Get Started" btn2="Discount" />

    </div>
  )
}

export default Home