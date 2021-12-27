import { API_URL } from "../config";

const getMealId = async (mealId) => {
    const response = await fetch( API_URL + 'lookup.php?i=' + mealId).then(data=>data.json())
    return await response
}

const allCategories = async () => {
    const response = await fetch(API_URL + 'categories.php').then(data=>data.json())
    return await response
}

const getFilterCategory = async (categoryId) => {
    const response = await fetch(API_URL + 'filter.php?c=' + categoryId).then(data=>data.json())
    return await response
}

export{
    getMealId,
    allCategories,
    getFilterCategory
}