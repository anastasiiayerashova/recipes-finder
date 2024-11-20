import s from './RecipeDetails.module.css'
import { getRecipeById } from '../../api'
import { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


export default function RecipeDetails() {
    const [data, setData] = useState(null)
    const { recipeId } = useParams()
    
    useEffect(() => {
        const handleSearch = async () => {
            const recipe = await getRecipeById(recipeId)
            setData(recipe)
        }
        handleSearch()
    }, [recipeId])

    if (!data) {
        return null
    }

    return (
        <div>
            <img src={data.image} alt={data.name} />
            <h2 className={s.name}>{data.name}</h2>
            <div className={s.container}>
            <div className={s.ingredients}>
                <h3>Ingredients:</h3>
                <ul>
                    {data.ingredients.map((ingredient, index) => (
                        <li key={index}>
                            <p>{ingredient}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={s.instructions}>
                <h3>Instructions:</h3>
                <p>
                    {data.instructions.join(' ')}
                </p>
                </div>
                 <nav className={s.nav}>
                    <NavLink to='servings'>Servings</NavLink>
                    <NavLink to='difficulty'>Difficulty</NavLink>
                <NavLink to='cuisine'>Cuisine</NavLink>
                <NavLink to='minutes'>Cooking time</NavLink>
                <NavLink to='calories'>Calories per serving</NavLink>
                </nav>
                <div className={s.outlet}> 
                    <Outlet context={data} />
                     </div>
            </div>
           
        </div>
    )
}