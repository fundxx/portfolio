import React from "react";
import "./MainPage.css"
import Skills from "./Skills/Skills";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const textAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3},
    }),
}

const MainPage = () => {
    return (
        <div className="MainPage">
            <div className="title">
                <div className="title__intro">
                    <h2 className="title__caption">
                        Привет,<br/>
                        я <span className="title__decor">Андрей</span>
                    </h2>
                    <p className="title__signature">
                        Фронтенд разработчик,<br/>
                        Верстальщик
                    </p>
                </div>
                <div className="title__photo">
                    <img src="./images/Main/title.jpg" alt="#myPhoto" className="title__img"/>
                </div>
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="lets-work"
            >
                <motion.h2
                    variants={textAnimation}
                    custom={1}
                    className="lets-work__caption"
                >
                    Давайте работать<br/>
                    <span className="lets-work__caption_decor">вместе</span>
                </motion.h2>
                <motion.p
                    variants={textAnimation}
                    custom={2}
                    className="lets-work__signature"
                >
                    От адаптивного дизайна до SPA приложений<br/> на React. Мой путь как разработчика<br/>
                    только начинается, а потому любой проект<br/>
                    будет для меня <span className="lets-work__signature_decor">ценным</span> и <span className="lets-work__signature_decor">интересным</span>.
                </motion.p>
                <Link to="works">
                    <button  className="lets-work__my-skills-btn">
                        Мои работы
                    </button>
                </Link>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="how-studied"
            >
                <h2 className="how-studied__title">
                    Как я учился
                </h2>
                <div className="how-studied__grid-container">
                    <motion.div variants={textAnimation} custom={1} className="how-studied__item">
                        <img src="./images/how-studied/selfLearn.gif" alt="#selfLearn" className="how-studied__selfLearn"/>
                        <div className="how-studied__caption">
                            самостоятельное
                            обучение
                        </div>
                        <div className="how-studied__signature">
                            Задавшись идеей выучить веб-разработку,
                            я приступил искать
                            и учиться по программам: CS50,
                            MDN, Codewars
                        </div>
                    </motion.div>
                    <motion.div variants={textAnimation} custom={2} className="how-studied__item">
                        <img src="./images/how-studied/htmlAcad.jpg" alt="#selfLearn" className="how-studied__selfLearn"/>
                        <div className="how-studied__caption">
                            Html Academy
                        </div>
                        <div className="how-studied__signature">
                            Для лучшей систематизации
                            записался на зарекомендовавшие
                            себя курсы от Html академии.
                            Где получил базу JS и React
                        </div>
                    </motion.div>
                    <motion.div variants={textAnimation} custom={3} className="how-studied__item">
                        <img src="./images/how-studied/selfLearn.gif" alt="#selfLearn" className="how-studied__selfLearn"/>
                        <div className="how-studied__caption">
                            Домашние проекты
                        </div>
                        <div className="how-studied__signature">
                            Обзаведясь навыками и инструментами,
                            захотелось приступить к
                            реализации своих идей
                        </div>
                    </motion.div>
                </div>
            </motion.div>


            <div className="skills">
                <div className="skills__title">
                    Скилы
                </div>
                <ul className="skills__list">
                    <Skills name={"Верстка"} value={70} color={"#759CD8"}/>
                    <Skills name={"JS"} value={60} color={"#64AC8F"}/>
                    <Skills name={"React"} value={65} color={"#D91818"}/>
                </ul>
            </div>


        </div>
    )
}

export default MainPage;
