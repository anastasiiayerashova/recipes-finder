import { useParams, useOutletContext } from "react-router-dom";
import { getRecipeById } from "../../api";
import { useEffect, useState } from "react";

export default function RecipesSection() {
    const data = useOutletContext()
    const { detailType } = useParams()
    
    if (!data) {
        return null
    }

    const details = {
        servings: `Servings: ${data.servings}`,
        difficulty: `Difficulty: ${data.difficulty}`,
        cuisine: `Cuisine: ${data.cuisine}`,
        minutes: `Cooking Time: ${data.cookTimeMinutes} minutes`,
        calories: `Calories: ${data.caloriesPerServing} per serving`,
}

    return (
        <p>
          {details[detailType] || 'Detail not found'}
        </p>
    )
}