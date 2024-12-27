import { useEffect } from 'react'
import s from './About.module.css'
import { AnimatedLayout } from '../../components/AnimatedLayout'
import { motion } from 'framer-motion'

export default function About() {

 useEffect(() => {
    document.title = 'About'
 })
    
    const textAnimation = {
    hidden: { 
        scale: 0.5, 
        opacity: 0 
    },
    visible: custom => ({
        scale: 1,
        opacity: 1,
        transition: { delay: custom * 0.3, duration: 0.5 }
    })
};

    return (
    <AnimatedLayout>
        <div>  
        <motion.h1 custom={1} variants={textAnimation} initial='hidden' animate='visible'>About Us</motion.h1>
        <motion.p custom={2} variants={textAnimation} initial='hidden' animate='visible'>At Radiant Recipes, we believe that every dish tells a story,
            and every recipe is a chance to create memories. Our mission
            is to bring you closer to the joy of cooking by offering recipes
            that are easy to follow, delicious, and bursting with flavor.
            Created by food enthusiasts and tested for perfection, our collection
            celebrates the diversity of global cuisines while keeping simplicity
            at its heart. Whether you're a beginner or a seasoned cook,
            Radiant Recipes is here to inspire you with flavors that shine.
                Join us as we celebrate the art of cooking and the magic it brings to our lives.</motion.p>
            <img src='/aboutImg.jpeg' className={s.img} />
            </div>
    </AnimatedLayout>
    )
}