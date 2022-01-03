import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'

export default function App() {

    let auth = false

    return (
        <div>
            <Navbar auth ={auth} />
            <Routes>
                <Route path="/" exact element={!auth ? <Navigate to='login' /> : <Navigate to='dashboard' />} />
                <Route path="dashboard" exact element={auth ? <Home /> : <Navigate to='/' />} />
                <Route
                    path="login"
                    element={
                        <main style={{ padding: "2rem", textAlign: 'center' }}>
                            <p>- Login en construccion-</p>
                        </main>
                    }
                />
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
