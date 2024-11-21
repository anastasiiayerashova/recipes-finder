import { useState, useEffect } from 'react'
import { getRecipes } from '../../api'
import s from './Recipes.module.css'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useSearchParams } from 'react-router-dom'

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

    return (
        <div className={s.container}> 
        <div>
            <h1>Recipes</h1>
                <p className={s.text}>Dive into the vibrant world of recipes with Radiant Recipes!
                From comforting classics to modern creations, our collection is designed to inspire and satisfy.
                Each recipe is crafted with care, featuring detailed instructions,
                helpful tips, and beautiful imagery to guide you through every step.
                Whether you’re exploring new cuisines or perfecting your favorites,
                    you’ll find the perfect recipe to brighten your table.</p>
                <SearchBar value={recipeName} onChange={updateQueryString}/>
            </div>
            <ul className={s.list}>
                {visibleRecipes.map(recipe => (
                    <li key={recipe.id} className={s.item}>
                        <Link to={recipe.id.toString()} state={location}>
                            <img src={recipe.image} className={s.img} />
                            <h2 className={s.recipeName}>{recipe.name}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    )
}