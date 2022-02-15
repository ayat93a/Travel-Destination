import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'
import { useState } from "react";

const [readMore , setReadMore] = useState (false)

function TourDetails (props){
    let {id} = useParams();
    const result = props.data.filter((value)=> value.id === {id});
    return (
        <>
        <h2>{result[0].name}</h2>
        <p>
            Description : {result[0].info}
        
            <button onClick = {() => setReadMore(!readMore)} >
            {readMore ? 'Show More' : 'Show Less'}
            
            
            </button>
           
        
        </p>
        <p>{result[0].price}</p>
        <img src = '{result[0].image}' />
    
        </>
    )
}
export default TourDetails;