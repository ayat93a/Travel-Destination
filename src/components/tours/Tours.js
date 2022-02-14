
function Tours(props){

    return (
        <>
       { props.data.map((tour, index) =>{
            return (
         <div key = {index}>
            <br>
            </br>
            
               <div>Name : {tour.name}</div>
            <br>
            </br>
            
        <img src = {tour.image} /> 
            <br>
            </br>
            <br>
            </br>
             
         </div>  
       ); 
        })    
    }
    </>
    )
}

export default Tours;