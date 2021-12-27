import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealId } from "../api/api";
import Loader from "../component/loader/Loader";
import RecipeItem from "../component/recipe/Recipe";

function Recipe() {

    const [recipe, setRecipe] = useState([])
    const {name} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getMealId(name).then(data=>setRecipe(data.meals[0]))
        setLoading(false)
    },[name])
    console.log(recipe);
    return ( 
        <>
            {
                loading ? <Loader/> : <RecipeItem  recipe={recipe}/>
            }
        </>
     );
}

export default Recipe;