import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilterCategory } from "../api/api";
import Loader from "../component/loader/Loader";
import ProductList from "../component/product/ProductList";



function Product() {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        getFilterCategory(id).then(data=>{
            setProduct(data.meals)
            setLoading(false)
        })
    },[id])


    return ( 
        <div>
            {
                loading ? <Loader /> : <ProductList product={product} />
            }
        </div>
     );
}

export default Product;