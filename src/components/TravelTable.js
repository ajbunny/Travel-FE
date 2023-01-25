import React, { useState, useEffect  } from 'react'
import { getTravels } from '../services/travel-api'
import { useNavigate, Link } from "react-router-dom";
import NewTravel from "./NewTravel"

function TravelTable() {
   const nav = useNavigate();
  const [data, setData] = useState([])
 
  useEffect(() => {
    getTravels().then((res) => setData(res.data));
  }, []);

  return (
    <div>
     {console.log(data)}
      <h1>THIS IS TRAVEL TABLE</h1>
      <ul>
      {
        data ?
        data.map((travel) =>{
          return (
            <li>
              <Link to={`/${travel._id}`}> 
                <h3>
                  {travel.country}
                  {travel.date}
                  {travel.description}
                </h3>
              </Link>
            </li>
          );
        }):<></>
           
  }  </ul>
       <NewTravel />
    </div>
  )
}

export default TravelTable;

//  <table>
      //   {
      //     data ? 
      //    data.map((travel) => 
          
      //   return ( <tr>
      //         <td>{travel.country}</td>
      //         <td>{travel.date}</td>
      //         <td>{travel.description}</td>
      //       </tr>)
      //     }): <></>
      //   
      //  </table>