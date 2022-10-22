import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

function Home() {
    return (
        <div>
            <BrowserRouter>
            <App/>
            </BrowserRouter>
        </div>
    )
}

export default Home
