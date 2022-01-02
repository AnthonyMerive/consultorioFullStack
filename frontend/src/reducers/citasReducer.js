import { citas } from "../types/citasTypes";


const INITIAL_STATE = []

export const citasReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case citas.GET: {
            return {
                ...state,
                citasGET: action.payload
            }
        }

        case citas.POST: {
            return {    
                ...state,
                citaPOST: action.payload
            }
        }

        case citas.PUT: {
            return {
                ...state,
                citaPUT: action.payload
            }
        }

        case citas.DELETE: {
            return {
                ...state,
                citaDELETE: action.payload
            }
        }

        default:
            return state;
    }
}