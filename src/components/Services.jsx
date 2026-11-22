import React from 'react'
import assets from '../assets/assets'
const Services = () => {
    const services = [
        {
            title: "Advertising",
            description: "We create compelling advertising campaigns that resonate with your target audience and drive results.",
            icon: "assets_icon.png"
        },
        {
            title: "Content marketing",
            description: "We create compelling content that engages your audience and drives meaningful interactions.",
            icon: "assets_marketing.png"
        },
        {
            title: "Content Writing",
            description: "We create compelling content that engages your audience and drives meaningful interactions.",
            icon: "assets_writing.png"
        },
        {
            title: "Social Media Management",
            description: "We create compelling content that engages your audience and drives meaningful interactions.",
            icon: "assets_social.png"
        }
    ]
        
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-grey-700 dark:text-white'>
     <img src={assets.bgImage2} alt="bg" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

    </div>
  )
}

export default Services