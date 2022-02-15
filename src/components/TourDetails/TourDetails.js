import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'

function TourDetails (props){
    let {id} = useParams();
    const result = props.data.filter((value)=> value.id === {id});
    return (
        <>
        <h2>{result[0]}</h2>
        <Link to = '/'>Home </Link>

        </>
    )
}
export default TourDetails;