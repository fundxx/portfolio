import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./App.css"
import AnimatedRoutes from "../AnimatedRoutes/AnimatedRoutes";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <div className="container">
                    <AnimatedRoutes/>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;
