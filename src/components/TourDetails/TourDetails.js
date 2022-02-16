import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'
import { useState } from "react";
import tourData  from '../../data/db.json'



function TourDetails (){
    
    let {id} = useParams();
    const [readMore , setReadMore] = useState (false);
    const result = tourData.filter((value)=> value.id === id);
    return (
        <>
        <h2>{result[0].name}</h2>
        <p>
        {readMore ?
            `Description : ${result[0].info}`
            : `Description : ${result[0].info.substring(0,300)}` }

           <button onClick = {() => setReadMore(!readMore)} >
            {readMore ? 'Show Less' : 'Show More'}</button>

            </p>
        
        
        <p>{result[0].price}</p>
        <img src = {result[0].image} />
    
        </>
    )
}
export default TourDetails;