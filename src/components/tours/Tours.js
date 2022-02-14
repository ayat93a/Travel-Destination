
function Tours(props){

    return (
        <>
       { props.data.map(tour , index =>{
            return 
         <div key = {index}>
               <div>Name :{tour.name}</div>
            <img src = {tour.image} />
            
         </div>  
           
        })    
    }
    </>
    )
}

export default Tours;