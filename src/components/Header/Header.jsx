import s from './Header.module.css'
import { MdOutlineFoodBank } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export default function Header() {
    return (
        
            <header className={s.header}>
            <p className={s.logo}>
                <span>
                    <MdOutlineFoodBank size={44} color='#551a8b'/>
                </span>
                {' '} RadiantRecipes
            </p>
            <nav className={s.nav}>
                <NavLink to='/' className={buildLinkClass}>Home</NavLink>
                <NavLink to='/about' className={buildLinkClass}>About Us</NavLink>
                <NavLink to='/recipes' className={buildLinkClass}>Recipes</NavLink>
            </nav>
            </header>
        
    )
}