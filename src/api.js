import axios from "axios";
axios.defaults.baseURL = 'https://dummyjson.com'

export const getRecipes = async () => {
    const { data } = await axios.get('/recipes')
    return data.recipes
}

export const getRecipeById = async (id) => {
    const { data } = await axios.get(`/recipes/${id}`)
    return data
}