import React from 'react'
import { useState, useEffect } from 'react'
import { getTravel, deleteTravel } from "../services/travel-api"
import { useParams, useNavigate } from 'react-router-dom'

export default function Travel() {
    //setting up the main page
    const nav = useNavigate()
    // destructuring the id parameter for use - this method must have parameters
    const { id } = useParams() 
    // setting up our state
    const [travel, setTravel] = useState ({}) 
    useEffect (()=> {
        getTravel(id)// get the one ToDo from the api using the id
        .then(res => setTravel(res.data))
    }, [])

    const deleteTheTravel = () => {
        //delete function goes here
        deleteTravel(id)
        //navigate back to the main page
        nav('/')
    }
    return(
        <div>
        
            <h3>Country: {travel.country}</h3>
            <h4>Date: {travel.date}</h4>
            <h4>Description: {travel.description} </h4>
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteTheTravel}>Delete</button>
            <button onClick={() => {nav('/')}}>Main</button>
        </div>
    )
}