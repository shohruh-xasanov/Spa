import ProductItem from "./ProductItem";


function ProductList({product}) {
    return ( 
        <div className="goods" style={{marginTop: '20px'}}>{
            product.map(item=>(
                <ProductItem key={item.idMeal} {...item} />
            ))
            }
        </div>
     );
}

export default ProductList