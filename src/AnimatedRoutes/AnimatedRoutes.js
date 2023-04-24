import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import MainPage from "../main-page/MainPage";
import Works from "../Works/Works";
import About from "../About/About";
import NotFound from "../Not-found/NotFound";

import {AnimatePresence} from "framer-motion";

function AnimatedRoutes(){
    const location = useLocation();
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="portfolio/" element={<MainPage />} />
                <Route path="portfolio/works" element={<Works />} />
                <Route path="portfolio/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;
