import { useState, useEffect} from "react"
import {Link} from 'react-router-dom'

const Van = () => {
    const [vans, setVans]= useState([]);
    // const [loading, setLoading] = useState(false)

useEffect(() => {
  fetch("/api/vans")
    .then(res => res.json())
    .then(data => setVans(data.vans) )
}, [])

const vanList = vans.map(van => (
 <div key={van.id} className="van-tile">
   <Link to={`/van/${van.id}`}>
    <img src={van.imageUrl}  alt={van.name}/>
    <div className="van-info">
        <h3>{van.name} </h3>
        <p>${van.price}<span>/day</span></p> 
    </div>
  </Link>
    <i className= {`van-type ${van.type} selected`}> {van.type}</i>
 </div>
        
))


  return (
    <div className="van-list-container">
      <h1>Explore Our Van Options</h1>
      <div className="van-lsit"> {vanList} </div>
        
    </div>
  )
}

export default Van