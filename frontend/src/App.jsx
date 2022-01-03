import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import Loading from './components/Loading'
import Login from './components/Login'
import { Navbar } from './components/Navbar'

export default function App() {

    const authenticated = getAuth();
    const [auth, setAuth] = useState(false)
    const [checking, setChecking] = useState(true)
    const usuarioLogeado = useSelector(store => store.login)

    useEffect(() => {
        usuarioLogeado.uid ?
            setAuth(true)
            :
            setAuth(false)
        onAuthStateChanged(authenticated, async (user) => {
            setChecking(false)
        })
    }, [usuarioLogeado, authenticated])

    if (checking) {
        return <Loading />;
    }

    console.log(auth)



    return (
        <div>
            <Navbar auth ={auth} />
            <Routes>
                <Route path="/" exact element={!auth ? <Login /> : <Home />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "3rem", textAlign: 'center' }}>
                            <p>- <strong>ERROR 404:</strong> Page No Found! -</p>
                        </main>
                    }
                />
            </Routes>
        </div>
    )
}
