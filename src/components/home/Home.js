import tourData from '../../data/db.json'
import Header from '../header/Header'
import Tours from '../tours/Tours'
import Footer from '../footer/Footer'


function Home (){
    return (
        <>
        <Header/>
        <Tours data= {tourData}/>
        <Footer/>
        </>
    )
}
export default Home;