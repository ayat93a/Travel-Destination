import { Link } from "react-router-dom";
import Tour  from "./tour/Tour";


function Tours(props){
    return (
        <>

    {props.data.map(item =>{
        return(
            <Link to = {'/city/${item.id}'}><Tour tour ={item}/></Link>
        )
    })}
       {/* { props.data.map((tour, index) =>{
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
    } */}
    </>
    )
}
export default Tours;