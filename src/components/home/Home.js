
import tourData from './data/db.json'
=
import Header from '../header/Header'
import Tours from '../tours/Tours'
import Footer from '../footer/Footer'


function home (){
    return (
    
        <div>
            <Tours data={tourData}/>
        </div>
    )
}

export default Home;