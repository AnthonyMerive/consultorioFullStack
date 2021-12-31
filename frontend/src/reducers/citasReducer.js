import { citas } from "../types/citasTypes";


const INITIAL_STATE = []

export const citasReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case citas.GET: {
            return {
                citasGET: action.payload
            }
        }

        case citas.POST: {
            return {
                citaPOST: action.payload
            }
        }

        // case citas.PUT: {
        //     return {
        //         ...state,
        //         citas: action.payload
        //     }
        // }

        // case citas.DELETE: {
        //     return {
        //         ...state,
        //         citas: action.payload
        //     }
        // }

        default:
            return state;
    }
}