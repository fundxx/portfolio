import React, {useState, useRef} from "react";
import "./Header.css"
import {NavLink} from "react-router-dom";
import {motion, AnimatePresence} from "framer-motion";
import logo from "../images/header/logo.png"
import myPhoto from "../images/Contact/myPhoto.png"

const Header = (props) => {
    const {
        title = 'Меню',
    } = props;
    const [isFullscreenMenu, setVisibleMenu] = useState(false);
    const ref = useRef(null);
    const handleVisibilityMenu = ()=> {
        setVisibleMenu(!isFullscreenMenu);
        !isFullscreenMenu ? ref.current.style.color = '#1C222A' : ref.current.style.color = '#dcdcdc';
    };

    const [isHire, setVisibleHire] = useState(false);
    const handleVisibilityHire = ()=> {
        setVisibleHire(!isHire);
    };

    return (
        <>
            <header className="header">
                <div className="header__nav">
                    <div className="header__promo">
                        <NavLink to="portfolio/" className="header__link">
                            <img src={logo} alt="#logo" className="header__logo"/>
                        </NavLink>
                        <button ref={ref} onClick={handleVisibilityMenu} className="header__open-nav">
                            {title}
                        </button>
                    </div>
                    <AnimatePresence>
                        {
                            isFullscreenMenu && (
                                <motion.div
                                    initial={{height:0, width:0}}
                                    animate={{height:"55vh", width:"100%", transition: { bounce: 0 }}}
                                    exit={{height:0, width:0, opacity:0}}
                                    className="header__fullscreen fullscreen"
                                >
                                    <div className="fullscreen__horizontal"> </div>
                                    <NavLink onClick={handleVisibilityMenu} to="portfolio/" className="fullscreen__nav-item">
                                        <div className="fullscreen__nav-caption">
                                            Главная
                                        </div>
                                        <div className="fullscreen__nav-signature">
                                            Вернуться на главную
                                        </div>
                                    </NavLink>
                                    <NavLink onClick={handleVisibilityMenu} to="portfolio/works" className="fullscreen__nav-item">
                                        <div className="fullscreen__nav-caption">
                                            Работы
                                        </div>
                                        <div className="fullscreen__nav-signature">
                                            Учебные проекты
                                        </div>
                                    </NavLink>
                                    <NavLink onClick={handleVisibilityMenu} to="portfolio/about" className="fullscreen__nav-item">
                                        <div className="fullscreen__nav-caption">
                                            Обо мне
                                        </div>
                                        <div className="fullscreen__nav-signature">
                                            Немного личного и бэкграунда
                                        </div>
                                    </NavLink>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                    <button onClick={handleVisibilityHire} className="hire">
                        <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="hire__icon" stroke="#FFAF4F">
                            <path d="M26.5 13.7059H26.5213M18 13.7059H18.0213M9.5 13.7059H9.52125M7.375 26.4118V37L18 26.4118H35V1H1V26.4118H7.375Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        <span className="hire__text">
                            Нанять
                        </span>
                    </button>
                    <AnimatePresence>
                        {
                            isHire && (<>
                                <motion.div
                                    initial={{top:"-200px"}}
                                    animate={{top: "200px"}}
                                    exit={{top:"120vh"}}
                                    className="contact"
                                >
                                    <div className="contact__page">
                                        <img src={myPhoto} alt="myPhoto" className="contact__image"/>
                                        <div className="contact__info">
                                            <p className="contact__name">
                                                Плехов Андрей Дмитриевич
                                            </p>
                                            <div className="contact__links">

                                                <a href="https://t.me/Andrei_Plekhov" target={`_blank`} className="contact__link">
                                                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact__telegram">
                                                        <rect width="30" height="31" rx="9" fill="black"/>
                                                        <path d="M25.875 15.5C25.875 21.7249 20.9946 26.75 15 26.75C9.0054 26.75 4.125 21.7249 4.125 15.5C4.125 9.27511 9.0054 4.25 15 4.25C20.9946 4.25 25.875 9.27511 25.875 15.5Z" stroke="#EDB021" strokeWidth="0.75"/>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M21.0459 10.0497L18.8285 21.6071C18.8285 21.6071 18.5179 22.4093 17.6639 22.0233L14.444 19.4718L14.5051 19.5213L12.4817 21.4316C12.4817 21.4316 12.3215 21.557 12.1517 21.4767L12.2596 20.4916L12.5593 17.8716C12.5593 17.8716 18.2365 12.5969 18.4694 12.3712C18.7023 12.1506 18.6247 12.1005 18.6247 12.1005C18.6441 11.8297 18.2074 12.1005 18.2074 12.1005L10.6815 17.0393C10.6815 17.0393 10.6815 17.0393 10.6815 17.0393L10.6814 17.0393L7.54686 15.9513C7.54686 15.9513 7.06649 15.7758 7.01796 15.3897C6.96944 15.0036 7.56142 14.798 7.56142 14.798L20.0221 9.7489C20.0221 9.74389 21.0459 9.27758 21.0459 10.0497Z" fill="#EDB021"/>
                                                    </svg>
                                                </a>

                                                <a href="https://github.com/fundxx" target={`_blank`} className="contact__link">
                                                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact__github">
                                                        <g clipPath="url(#clip0_181_1867)">
                                                            <rect width="30" height="31" rx="9" fill="black"/>
                                                            <path d="M12.006 30.062C12.006 30.4742 11.5312 31.0218 10.7812 30.8789V31L20.3906 31.0017V30.8118C19.6294 30.9647 19.4423 30.4786 19.4423 30.0623C19.4423 29.5515 19.461 27.8739 19.461 25.7935C19.461 24.3413 18.981 23.3922 18.4429 22.9117C21.7842 22.5266 25.2914 21.2106 25.2914 15.2331C25.2914 13.5339 24.711 12.1452 23.7492 11.0568C23.9039 10.663 24.4185 9.08156 23.6001 6.93893C23.6001 6.93893 22.3429 6.52067 19.4798 8.53398C18.2817 8.18862 16.9982 8.01642 15.7242 8.00964C14.4482 8.01666 13.1657 8.18862 11.9685 8.53398C9.10354 6.52067 7.84354 6.93893 7.84354 6.93893C7.02792 9.08156 7.5426 10.663 7.69729 11.0568C6.73729 12.1452 6.15323 13.5339 6.15323 15.2331C6.15323 21.196 9.65479 22.5305 12.9857 22.9233C12.5573 23.3123 12.1692 23.9981 12.0332 25.0037C11.1782 25.4026 9.00604 26.0892 7.66729 23.7111C7.66729 23.7111 6.8751 22.2173 5.37042 22.1074C5.37042 22.1074 3.9051 22.0878 5.26729 23.0536C5.26729 23.0536 6.25073 23.5322 6.93229 25.3294C6.93229 25.3294 7.8126 28.3561 11.9854 27.4156C11.9929 28.714 12.006 29.6924 12.006 30.062Z" fill="#EDB021"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_181_1867">
                                                                <rect width="30" height="31" rx="9" fill="white"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>

                                                <p className="contact__mail">
                                                    andreiplekhov0@gmail.com
                                                </p>
                                            </div>
                                            <a href="tel:+79514934339" className="contact__phone">
                                                +7 (951) 493-43-39
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{opacity:0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity:0}}
                                    className="contact__overlay"
                                    onClick={handleVisibilityHire}
                                />
                            </>)
                        }
                    </AnimatePresence>
                </div>
            </header>
        </>
    )
}

export default Header;
