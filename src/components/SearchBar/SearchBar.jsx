import s from './SearchBar.module.css'
import { HiSearch } from 'react-icons/hi';

export default function SearchBar({value, onChange}) {
    return (
        <div className={s.wrapper}>
            <HiSearch className={s.icon}/>
            <input className={s.input}
                type='text'
                value={value}
                onChange={(e)=> onChange(e.target.value)}
            />
        </div>
    )
}