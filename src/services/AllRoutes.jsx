import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/home/Home"
import ThankYou from "../pages/thankyou/Thankyou"

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/thank-you" element={<ThankYou />} />
            </Routes>

        </div>
    )
}
export default AllRoutes