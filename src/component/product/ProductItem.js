import { Link } from "react-router-dom";

function ProductItem({idMeal,strMeal,strMealThumb, }) {
    const recipeLink = `/recipe/${idMeal}`
    return ( 
        <div className="card ">
        <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="card-content">
            <span className="card-title">
                {strMeal}
            </span>
        </div>
        <div className="card-action"> 
            <Link to={recipeLink} className="btn waves-effect waves-light" >Watch Food</Link>
        </div>
    </div>
     );
}

export default ProductItem;