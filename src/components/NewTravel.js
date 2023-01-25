import { useNavigate } from "react-router-dom"
import {newTravel} from '../services/travel-api'


export default function CreateTravel() {
    
    const nav = useNavigate()

    const Tree = (e) => {
        e.preventDefault();
        const travel = {country: e.target.country.value, date: e.target.date.value,description: e.target.description.value }
        
    newTravel(travel)
    .then((response)=> {
       
        nav('/')
    })
      
    }
     
    return (
    <div id="create">
      <h4> Create a New Dream Destination</h4> 
        <form onSubmit={Tree}>
          Country: <input type="text" name='country' />
          <br/>
           Date: <input type="text" name='date' />
           <br/>
        Description:<input type="text" name='description' />
        <br/>
            <input type='submit' />
            </form>
    </div>
    )
    }