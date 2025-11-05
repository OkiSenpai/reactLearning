

function Card(){

    return(
 
      <div className="container">
        <img
        src="images/default.jpg"
        style={{ width: '200px' }}
        alt="book cover"
      />
        <h3>Title</h3>
        <p>by : autor</p>
        <p>Published : year</p>
        <p>prix</p>
        <button>add to card</button>
        
      </div>

              
     
    

    )
}

export default Card;