import React from 'react'
import { cardItems } from '../constants'
import IconCard from './IconCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const IconsSection = () => {

    useGSAP(() => {
        gsap.from(".iconstext", {
            y: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: ".iconstext",
                start: "bottom center"
            }
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".icons-section",
                start: "top center",
                end: "bottom top",
                scrub: 1
            }
        })

        tl.fromTo(".icon-card:nth-child(1)",
            {x: 150},
            {x: -135},
            0
        )
        tl.fromTo(".icon-card:nth-child(2)",
            {y: 150},
            {y: -60},
            0
        )
        tl.fromTo(".icon-card:nth-child(3)",
            {x: -150},
            {x: 135},
            0
        )
        tl.fromTo(".icon-card:nth-child(4)",
            {x: 150},
            {x: -100},
            0
        )
        tl.fromTo(".icon-card:nth-child(5)",
            {y: -150},
            {y: 60},
            0
        )
        tl.fromTo(".icon-card:nth-child(6)",
            {x: -150},
            {x: 100},
            0
        )
    }, [])

  return (
    <section className='icons-section w-screen min-h-screen z-36'>
        <div className='w-full h-full flex items-center justify-center flex-col'>
            <h1 className='iconstext pb-10 font-bold text-white text-5xl'>Plenty of cool stuff</h1>

            <div className='flex justify-center grid grid-cols-3 gap-y-36 w-full'>
                {cardItems.map((item) => (
                    <div className='icon-card' key={item.title}>
                        <IconCard
                            img = {item.img}
                            title = {item.title}
                            text = {item.text}
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default IconsSection