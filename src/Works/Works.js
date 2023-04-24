import React from "react";
import "./Works.css";
import {motion} from "framer-motion";

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2},
    }),
}

const Works = () => {
return (
        <div className="Works">
            <div className="works__title">
                Некоторые работы
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true}}
                className="works__item"
            >
                <div className="works__caption">
                    Домашние проекты
                </div>
                <div className="works__projects projects">
                    <motion.div
                        variants={textAnimation}
                        custom={1}
                        className="projects__item"
                    >
                        <div className="projects__caption">
                            Six cities
                        </div>
                        <a href="https://github.com/fundxx/six-cities" target="_blank" rel="noreferrer" className="projects__link">
                            <img src="./images/Works/six-cities.jpg" alt="project" className="projects__photo"/>
                        </a>
                    </motion.div>
                    <motion.div
                        variants={textAnimation}
                        custom={1}
                        className="projects__item"
                    >
                        <div className="projects__caption">
                            Big trip
                        </div>
                        <a href="https://fundxx.github.io/big-trip/" target="_blank" rel="noreferrer" className="projects__link">
                            <img src="./images/Works/big-trip.jpg" alt="project" className="projects__photo"/>
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Works;
