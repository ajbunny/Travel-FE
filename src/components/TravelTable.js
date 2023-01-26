import React, { useState, useEffect  } from 'react'
import { getTravels } from '../services/travel-api'
import { useNavigate, Link } from "react-router-dom";
import NewTravel from "./NewTravel"


function TravelTable() {
   const nav = useNavigate();
  const [data, setData] = useState([])
 
  useEffect(() => {
    getTravels().then((res) => { 
      setData(res.data)
      console.log(res)
      
    })
  }, []);

  return (
    <div>
      <div id='container'> 
     {console.log(data)}
     <div id='TravelList'>
      <h1>Travel Dreams</h1>
      <ul>
      {
        data ?
        data.map((travel) =>{
          return (
            <div>
               
              <Link  to={`/travel/${travel._id}`}> 
              <li> <h2> {travel.country} </h2></li>
               <h5>{travel.date}</h5>
               <h5>{travel.description}</h5>
               </Link>
              
            </div>
          );
        }):<></>
           
  }  </ul>
  </div>
  
       <NewTravel />
      
       </div>
    </div>
  )
}

export default TravelTable;

