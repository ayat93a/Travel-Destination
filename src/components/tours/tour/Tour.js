 import TourDetails from "../../TourDetails/TourDetails";
import {Routes , Route} from 'react-router-dom'
// import {Link} from 'react-router-dom'

    function Tour (props){
    return (
        <>
     { props.data.map( (tour, index) =>{
        return (     
    <div key = {index}>
               <div>Name : {props.tour.name}</div>    
        <img src = {props.tour.image} />         
         </div>  
       ); 
        })
        }  
        </> 
) 
    }
export default Tour;