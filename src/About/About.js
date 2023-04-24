import React from "react";
import "./About.css"
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

const About = () => {
    return (
        <motion.div className="About"
                    initial={{opacity:0}}
                    animate={{opacity: 1}}
                    transition={{duration:0.9}}
        >
            <div className="about__caption">
                Обо мне
            </div>
            <div className="about__signature">
                Я веб-разработчик, который только
                начинает свой путь в этой сфере.
            </div>
            <div className="about__interview interview">
                <img src="./images/About/stella.png" alt="stella_RnD" className="interview__photo photo1"/>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={textAnimation}
                    custom={1}
                    viewport={{ once: true }}
                    className="interview__preview text1"
                >
                    В моей жизни происходило много перемен:
                    частые переезды,смена направления учебы.
                    С таким опытом сталкивание с новыми задачами и ситуациями является привычным делом.
                    <br/>
                    Сейчас мне 20 лет и живу я в Ростове-на-Дону.
                    Здесь же заочно обучаюсь в вузе.
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="interview__item text2"
                >
                    <motion.div  variants={textAnimation} custom={1} className="interview__caption">
                        Обучение
                    </motion.div>
                    <motion.div variants={textAnimation} custom={2} className="interview__signature">
                        Путь к той мысли, что в своей жизни я хочу заниматься с компьютами пришло ко мне не сразу,
                        хотя выражалось ещё в раннем возрасте, но в какой-то момент я посчитал, что буду строить карьеру Юриста,
                        однако вскоре более глубоко углубившись в это дело какое-либо желание пропало и я стал пробовать другие сферы. В то время нашел для себя
                        занятие веб разработкой, которое и полюбил. Здесь я мог проэктировать, создавать дизайны и реализовывать всё своими руками.
                    </motion.div>
                </motion.div>
                <img src="./images/About/cat.png" alt="mountain" className="interview__photo photo2"/>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="interview__item text3"
                >
                    <motion.div variants={textAnimation} custom={1} className="interview__caption">
                        Путешествия
                    </motion.div>
                    <motion.div variants={textAnimation} custom={2} className="interview__signature">
                        Расскажу немного про хобби. Как по мне, то есть всего два способа отдохнуть. Первый это общение, а второй это созерцание природы,
                        поэтому путешествия и походы занимают особое место в моей жизни. В свободное время пройтись с друзьями
                        по парку является лучшей разгрузкой. Однако как только выдается возможность я стараюь отправиться
                        в недолгую поездку по различным регионам России.
                    </motion.div>
                </motion.div>
                <img src="./images/About/mountain.png" alt="mountain" className="interview__photo photo3"/>


            </div>
        </motion.div>
    )
}

export default About;
