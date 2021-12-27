import CategoryItem from "./CategoryItem";

function CategorList({category}) {
    return ( 
        <div className="goods" style={{marginTop: '20px'}}>{
            category.map(item=>(
                <CategoryItem key={item.idCategory} {...item} />
            ))
            }
        </div>
     );
}

export default CategorList