import {useEffect, useState} from 'react'
import { allCategories } from '../../api/api'
import CategorList from '../categories/CategoryList'
import Loader from '../loader/Loader'

function Main () {

    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        allCategories().then(data=>{
            setCategory(data.categories)
            setLoading(false)
        })
    },[])

    return ( 
    <div >
        {
        loading ? <Loader/> :<CategorList category={category} />
        }
    </div> 
    );
}

export default Main;