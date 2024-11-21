import { useEffect } from 'react'
import s from './Home.module.css'

export default function Home() {

    useEffect(() => {
    document.title = 'Home'
})

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to Radiant Recipes, where the love of cooking meets creativity
                and flavor! Whether you're whipping up a quick snack,
                preparing a family feast, or experimenting with gourmet dishes,
                we've got everything you need to make your culinary journey unforgettable.
                Discover inspiring recipes, learn new cooking techniques, and transform
                your everyday meals into extraordinary experiences. Let’s cook something amazing together!</p>
            <img src='/homeImg.jpg' className={s.img} />
        </div>
    )
}