import { useState, useEffect } from 'react'
import { getRecipes } from '../../api'
import s from './Recipes.module.css'
import { Link } from 'react-router-dom'

export default function Recipes() {
    const [data, setData] = useState([])

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

    return (
        <> 
        <div>
            <h1>Recipes</h1>
            <p>Dive into the vibrant world of recipes with Radiant Recipes!
                From comforting classics to modern creations, our collection is designed to inspire and satisfy.
                Each recipe is crafted with care, featuring detailed instructions,
                helpful tips, and beautiful imagery to guide you through every step.
                Whether you’re exploring new cuisines or perfecting your favorites,
                you’ll find the perfect recipe to brighten your table.</p>
            </div>
            <ul className={s.list}>
                {data.map(recipe => (
                    <li key={recipe.id} className={s.item}>
                        <Link to={recipe.id.toString()}>
                            <img src={recipe.image} className={s.img} />
                            <h2>{recipe.name}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </>

    )
}