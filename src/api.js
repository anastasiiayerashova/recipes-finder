import axios from "axios";
axios.defaults.baseURL = 'https://dummyjson.com'

export const getRecipes = async () => {
    const { data } = await axios.get('/recipes')
    return data.recipes
}