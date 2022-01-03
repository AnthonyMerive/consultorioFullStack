import { getAuth, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { googleAuth } from '../services/firebase'
import { login } from '../types/loginTypes';

const auth = getAuth();

export const loginGoogle = () => {
    return (dispatch) => {
        signInWithPopup(
            auth,
            googleAuth
        )
            .then(({ user }) => {
                console.log(user)
                console.log(user.providerData[0])
                const data = user.providerData[0];
                dispatch(loginSincrono(user.uid, data.displayName, data.photoURL, data.email))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const loginEmailPassword = (email, password) => {
    return (dispatch) => {
        signInWithEmailAndPassword(auth,
            email,
            password
        ).then(({ user }) => {
            console.log(user)
            console.log(user.providerData[0])
            const data = user.providerData[0];
            dispatch(loginSincrono(user.uid, data.displayName, data.photoURL, data.email))
        }).catch(error => {
            console.log(error)
        })
    }
}

export const loginSincrono = (uid, displayName, foto, correo) => {
    return {
        type: login.in,
        payload: {
            uid,
            displayName,
            foto,
            correo
        }
    }
}

export const logout = () => {

    return (dispatch) => {
        signOut(auth)
            .then(user => {
                dispatch(logoutSincrono())
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const logoutSincrono = () => {
    return {
        type: login.out
    }
}