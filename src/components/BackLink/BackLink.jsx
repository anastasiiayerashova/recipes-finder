import { Link } from 'react-router-dom';
import s from './BackLink.module.css'
import { HiArrowLeft } from 'react-icons/hi';

export default function BackLink({to, children}) {
    return ( <div className={s.arrowDiv}> 
        <Link to={to} className={s.link}>
            <HiArrowLeft className={s.icon}/>
            {children}
        </Link>
         </div>
    )
}