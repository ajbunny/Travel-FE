import axios from 'axios';
const travelURL ="https://travel-app-backend-urac.onrender.com/travel"

//#region PACKAGE ROUTES
export const getTravels = () => {
    const URL = `${travelURL}`
    const response = axios.get(URL)
    return response
}
//SHOW PACKAGE
export const getTravel = (id) => {
    const URL = `${travelURL}/${id}`
    const response = axios.get(URL)
    return response
}
//EDIT PACKAGE
export const editTravel = (id, updatedTravel) => {
    const URL = `${travelURL}/${id}`;
    const response = axios.put(URL, updatedTravel)
    return response
}

// CREATE NEW TRAVEL (new travel)
export const newTravel = (newtravel) => {
    const URL = travelURL
    console.log(newtravel)
    const response =axios.post(URL, newtravel).then(res=> {
        console.log(res.data)
    })
    console.log(response)
    return response
}
//DELETE THE LODGE
export const deleteTravel = (id) => {
    const URL = `${travelURL}/${id}`
    const response =axios.delete(URL)
    return response
}
//#endregion