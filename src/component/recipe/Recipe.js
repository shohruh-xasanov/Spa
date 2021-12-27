import ReactPlayer from 'react-player'

function RecipeItem({recipe}) {
    const {strMealThumb, strMeal,idMeal, strInstructions, strYoutube} = recipe
    return ( 
             <div style={{width : '70%', margin:'40px auto'}}>
                <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                    <img src={strMealThumb} alt={strMeal}/>
                    <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                    <p>{strInstructions}</p>
                    <ReactPlayer 
                    url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    playing={false}
                    loop={false}
                    playsinline={true}
                    controls={true}
                    volume={1}
                    width="auto"
                    light={true}
                    speed={true}
                    />
                    {strYoutube ?
                    <iframe src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} title={idMeal} 
                    width="500px"
                    height="300px"
                    /> : null
                    }
                    </div> 
                    <div className="card-action">
                    <a href="/">This is a link</a>
                    </div>
                </div>
                </div>
            </div>
     );
}

export default RecipeItem;