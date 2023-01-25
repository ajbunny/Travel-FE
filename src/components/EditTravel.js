import React from 'react';
import {getTravel, editTravel } from '../services/travel-api';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditTravel() {
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getTravel(id)// getting the travel that matches this is
        .then(res => setData(res.data))
    }, [])

    const editTheTravel = (e) => {
        e.preventDefault()
        const updatedTravel = {
            country: e.target.country.value, 
            date: e.target.date.value, 
            description: e.target.description.value}
        editTravel(id, updatedTravel).then(() => {
            nav('/')
        }) 
    }
   
    return (
        <div>
            <form onSubmit={editTheTravel}>
                Country: <input type='text' name='country' defaultValue={data.country} />
                Date:<input type='text' name='date' defaultChecked={data.date} />
                Description: <input type="text" name="description" />
               <input type='submit'/>
                <button onClick={() => {nav('/')}}>Home</button>
            </form>
        </div>
    )
}