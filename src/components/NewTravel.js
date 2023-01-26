import { useNavigate } from "react-router-dom"
import {newTravel} from '../services/travel-api'


export default function CreateTravel() {
    
    const nav = useNavigate()

    const Tree = (e) => {
        e.preventDefault();
        const travel = {country: e.target.country.value, date: e.target.date.value,description: e.target.description.value }
        
    newTravel(travel)
    .then(()=> {
        nav('/')
    })
      
    }
     
    return (
    <div id="create">
      <h4> Create a New Dream Destination</h4> 
        <form onSubmit={Tree}>
        <div className="items">
          Country: <input type="text" name='country' />
          </div>
          <br/>
          <div className="items">
           Date: <input type="text" name='date' />
           </div>
           <br/>
           <div className="items">
        Description:<input type="text" name='description' />
        </div>
        <br/>
            <input type='submit' />
            </form>
    </div>
    )
    }