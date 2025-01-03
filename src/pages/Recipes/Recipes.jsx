import { useState, useEffect } from 'react'
import { getRecipes } from '../../api'
import s from './Recipes.module.css'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useSearchParams } from 'react-router-dom'
import { AnimatedLayout } from '../../components/AnimatedLayout'
import { motion } from 'framer-motion'

export default function Recipes() {
    const location = useLocation()
    const [data, setData] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const recipeName = searchParams.get('name') ?? ''
    
    const visibleRecipes = data.filter((recipe) => recipe.name.toLowerCase().includes(recipeName.toLowerCase()))

    const updateQueryString = (name) => {
        const nextParams = name !== '' ? { name } : {}
        setSearchParams(nextParams)
    }
 
    useEffect(() => {
    document.title = 'Recipes'
 })
    
    useEffect(() => {
        const handleSearch = async () => {
            const recipes = await getRecipes()
            setData(recipes)
        }
        handleSearch()
    }, [data])
    
    if (!data) {
        return null
    }

    const featureAnimation = {
       hidden: {
       y: 100,
      opacity: 0,
    },
       visible: custom => ({
       y: 0,
       opacity: 1,
       transition: { delay: custom * 0.2 }, 
    }),
    }
    
    const hoverAnimation = {
    scale: 1.1
    }

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
        <div className={s.container}> 
        <div>
            <motion.h1 custom={1} variants={textAnimation} initial='hidden' animate='visible'>Recipes</motion.h1>
                <motion.p custom={2} variants={textAnimation} initial='hidden' animate='visible' className={s.text}>Dive into the vibrant world of recipes with Radiant Recipes!
                Each recipe is crafted with care, featuring detailed instructions,
                helpful tips, and beautiful imagery to guide you through every step.
                Whether you’re exploring new cuisines or perfecting your favorites,
                    you’ll find the perfect recipe to brighten your table.</motion.p>
                <SearchBar value={recipeName} onChange={updateQueryString}/>
            </div>
            <motion.ul className={s.list} initial='hidden' animate='visible'>
                {visibleRecipes.map((recipe, index) => (
                    <motion.li key={recipe.id} className={s.item} variants={featureAnimation} custom={index + 1} whileHover={hoverAnimation}>
                        <Link to={recipe.id.toString()} state={location}>
                            <img src={recipe.image} className={s.img} />
                            <h2 className={s.recipeName}>{recipe.name}</h2>
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    </AnimatedLayout>
    )
}