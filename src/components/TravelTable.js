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
     {console.log(data)}
      <h2>Travel Dreams</h2>
      <ul>
      {
        data ?
        data.map((travel) =>{
          return (
            <div>
              <Link to={`/travel/${travel._id}`}> {travel.country} 
                
               <h3> {travel.date}</h3>
              <h3> {travel.description}</h3>
               </Link>
              
            </div>
          );
        }):<></>
           
  }  </ul>
       <NewTravel />
    </div>
  )
}

export default TravelTable;

