 import TourDetails from "../../TourDetails/TourDetails";
import {Routes , Route} from 'react-router-dom'
import {Link} from 'react-router-dom';

    function Tour (props){
    return (
        <>
     {
         
    <div key = {props.tour.id}>
    <div>Name : {props.tour.name}</div>
    <br></br>      
    <img src = {props.tour.image} />  
    <br>
    </br>
    <br></br>       
    </div>  
    
        }  
        </>
) 
    } 
export default Tour;