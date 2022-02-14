

function Tours (props){
    //console.log(props)
    return (
<>
{props.data.map(tour =>{
    return(
        <div>
<div><h1>Name : {tour.name}</h1></div> 
<br>
</br>
<img src = {tour.image}/>
<br>
</br>
</div>

    )
})   
}
</>
    )
}

export default Tours;