import { useEffect } from 'react'
import s from './About.module.css'

export default function About() {

 useEffect(() => {
    document.title = 'About'
})

    return (
        <div>  
        <h1>About Us</h1>
        <p>At Radiant Recipes, we believe that every dish tells a story,
            and every recipe is a chance to create memories. Our mission
            is to bring you closer to the joy of cooking by offering recipes
            that are easy to follow, delicious, and bursting with flavor.
            Created by food enthusiasts and tested for perfection, our collection
            celebrates the diversity of global cuisines while keeping simplicity
            at its heart. Whether you're a beginner or a seasoned cook,
            Radiant Recipes is here to inspire you with flavors that shine.
                Join us as we celebrate the art of cooking and the magic it brings to our lives.</p>
            <img src='/aboutImg.jpeg' className={s.img} />
        </div>
    )
}