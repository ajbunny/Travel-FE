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

    const editTheTravel = e => {
        e.preventDefault()
        const updatedTravel = {country: e.target.travel.value, date: e.target.travel.value,description: e.target.description.value}
        editTravel(id, updatedTravel)
        nav(`/${id}`)
    }
   
    return (
        <div>
            <form onSubmit={editTheTravel}>
                Country: <input type='text' name='country' defaultValue={data.country} />
                Date:<input type='checkbox' name='complete' defaultChecked={data.date} />
                Description: <input type="text" name="description" />
                <textarea type="text"/>
                <input type='submit'/>
                <button onClick={() => {nav('/')}}>Main</button>
            </form>
        </div>
    )
}