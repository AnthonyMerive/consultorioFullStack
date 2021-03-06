import axios from "axios";
import { citas } from "../types/citasTypes";

export const getAsync = () => {

    return async (dispatch) => {
        axios.get('https://citas-reactive.herokuapp.com/citasReactivas')
            .then(function (response) {
                dispatch(getSync(response.data))
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const postAsync = (data) => {

    return async (dispatch) => {
        axios.post('https://citas-reactive.herokuapp.com/citasReactivas', data)
            .then(function (response) {
                console.log(response)
                dispatch(getAsync())
                dispatch(postSync(data))
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const deleteAsync = (id) => {
    
    return async (dispatch) => {
        axios.delete(`https://citas-reactive.herokuapp.com/citasReactivas/${id}`)
        .then(function (response) {
            console.log(response)
            dispatch(getAsync())
        }).catch(function (error) {
            console.log(error);
        })
    }
}

export const putAsync = (data) => {
    return async (dispatch) => {
        axios.put(`https://citas-reactive.herokuapp.com/citasReactivas/${data.id}`, data)
            .then(function (response) {
                console.log(response)
                dispatch(getAsync())
                dispatch(putSync(data))
            })
            .catch(function (error) {
                console.log(error);
            })
    }

}

const getSync = (data) => {
    return {
        type: citas.GET,
        payload: data
    }
}

const postSync = (data) => {
    return {
        type: citas.POST,
        payload: data
    }
}

const putSync = (data) => {
    return {
        type: citas.PUT,
        payload: data
    }
}
