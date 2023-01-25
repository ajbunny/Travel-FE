import axios from 'axios';
const travelURL ="http://localhost:3001/travel"

//#region PACKAGE ROUTES
export const getTravels = (id) => {
    const URL = `${travelURL}/${id}`
    const response = axios.get(URL)
    return response
}
//SHOW PACKAGE
export const getTravel = () => {
    const URL = `${travelURL}`
    const response = axios.get(URL)
    return response
}
//EDIT PACKAGE
export const editTravel = (id, updatedTravel) => {
    const URL = `${travelURL}/${id}`;
    const response = axios.put(URL, updatedTravel)
    return response
}

// CREATE THE PACKAGE (new travel)
export const newTravel = (newtravel) => {
    const URL = travelURL
    const response =axios.post(URL, newtravel)
    return response
}
//DELETE THE LODGE
export const deleteTravel = (id) => {
    const URL = `${travelURL}/${id}`
    const response =axios.delete(URL)
    return response
}
//#endregion