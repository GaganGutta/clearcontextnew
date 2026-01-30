import React from "react"

import { BrowserRouter, Routes, Route } from "react-router"

import LandingPage from "./pages/Landing"
import ContactPage from "./pages/Contact"

import "./styles.scss"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index Component={LandingPage} />
                <Route path={"/contact"} Component={ContactPage} />
            </Routes>
        </BrowserRouter>
    )
}

export default App