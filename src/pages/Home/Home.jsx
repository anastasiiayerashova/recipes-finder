import { useEffect } from 'react'
import s from './Home.module.css'
import { AnimatedLayout } from '../../components/AnimatedLayout'
import { motion } from 'framer-motion'

export default function Home() {

    useEffect(() => {
    document.title = 'Home'
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
            <motion.h1 custom={1} variants={textAnimation} initial='hidden' animate='visible'>Home</motion.h1>
            <motion.p variants={textAnimation} custom={2} initial='hidden' animate='visible'>Welcome to Radiant Recipes, where the love of cooking meets creativity
                and flavor! Whether you're whipping up a quick snack,
                preparing a family feast, or experimenting with gourmet dishes,
                we've got everything you need to make your culinary journey unforgettable.
                Discover inspiring recipes, learn new cooking techniques, and transform
                your everyday meals into extraordinary experiences. Let’s cook something amazing together!</motion.p>
            <img src='/homeImg.jpg' className={s.img} />
            </div>
    </AnimatedLayout>
    )
}