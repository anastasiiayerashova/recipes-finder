import s from './RecipeDetails.module.css'
import { getRecipeById } from '../../api'
import { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import BackLink from '../../components/BackLink/BackLink'
import { useLocation } from 'react-router-dom'

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export default function RecipeDetails() {
    const location = useLocation()
    const backLinkHref = location.state ?? '/recipes'
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
            <BackLink to={backLinkHref}>Back to recipes</BackLink>
            <div className={s.firstDiv}> 
                
                <img src={data.image} alt={data.name} />
                <div className={s.secDiv}> 
            <h2 className={s.name}>{data.name}</h2>
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
                     </div>
                </div>
            <div className={s.container}>
            
            <div className={s.instructions}>
                <h3>Instructions:</h3>
                <p>
                    {data.instructions.join(' ')}
                </p>
                </div>
                 <nav className={s.nav}>
                    <NavLink to='servings' className={buildLinkClass}>Servings</NavLink>
                    <NavLink to='difficulty' className={buildLinkClass}>Difficulty</NavLink>
                <NavLink to='cuisine' className={buildLinkClass}>Cuisine</NavLink>
                <NavLink to='minutes' className={buildLinkClass}>Cooking time</NavLink>
                <NavLink to='calories' className={buildLinkClass}>Calories per serving</NavLink>
                </nav>
                <div className={s.outlet}> 
                    <Outlet context={data} />
                     </div>
            </div>
           
        </div>
    )
}