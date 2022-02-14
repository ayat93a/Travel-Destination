
function tours(props){
    return (
        <>
       { props.data.map(tour =>{
            return 
            <>
            <div>Name :{tour.name}</div>
            <br>
            </br>
            <img src = {tour.image} />
            <br>
            </br>
        <hr >
        </hr>
        <br></br>
          </>  
        })    
    }
    </>
    )
}

export default Tours;