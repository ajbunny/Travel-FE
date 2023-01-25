import { useNavigate } from "react-router-dom"
import {newTravel} from '../services/travel-api'


export default function CreateTravel() {
    
    const nav = useNavigate()

    const New = (e) => {
        e.preventDefault();
        const travel = {country: e.target.travel.value, date: e.target.travel.value,description: e.target.description.value }
    newTravel(travel)
        nav('/')
    }

    return (
    <div id="create">
      <h4> Create a New Dream Destination</h4> 
        <form onSubmit={New}>
            <input type="text" name='description' />
            <input type='submit' />
            </form>
    </div>
    )
    }