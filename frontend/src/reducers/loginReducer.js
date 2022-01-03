import { login } from "../types/loginTypes";


export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case login.in:

            return {
                uid: action.payload.uid,
                displayName: action.payload.displayName,
                foto: action.payload.foto,
                correo: action.payload.correo
            }


        case login.out:
            return {

            }

        default:
            return state;
    }
}