import { useRef, React } from "react";
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import './navbar.scss'

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <section className='header'>
                <div className='header_logo'>
                    <p className='header_logo_text'>SONETEX</p>
                </div>
                <ul className='header_nav' ref={navRef}>
                    <li> <NavLink to={"/"}> <a href="#">Главная</a></NavLink> </li>
                    <li> <NavLink to={"/maxsulot"}><a href="#">Товары</a></NavLink>
                        <ul className='header_big_menu'>
                            <li><a href="#">Климатическое и вентиляционное оборудование</a></li>
                            <li><a href="#">Промышленное оборудование и компоненты</a></li>
                            <li><a href="#">Устройства для транспортировки жидкостей</a></li>
                            <li><a href="#">Энергетические и генераторные установки</a></li>
                            <li><a href="#">Производственные линии и оборудование</a></li>
                            <li><a href="#">Насосное и компрессорное оборудование</a></li>
                            <li><a href="#">Медицинские устройства и оборудование</a></li>
                            <li><a href="#">Аудиовизуальные и медиа-технологии</a></li>
                            <li><a href="#">Оборудование на солнечной энергии</a></li>
                            <li><a href="#">Обрабатывающее оборудование</a></li>
                            <li><a href="#">Грузоподъёмное оборудование</a></li>
                            <li><a href="#">Строительная и спец. техника</a></li>
                            <li><a href="#">Горно-шахтное оборудование</a></li>
                            <li><a href="#">Нефтегазовое оборудование</a></li>
                            <li><a href="#">Лабораторное оборудование</a></li>
                            <li><a href="#">Измерительные приборы</a></li>
                            <li><a href="#">IT технологии и системы</a></li>
                            <li><a href="#">Двигатели и Моторы</a></li>
                        </ul>
                    </li>
                    <li><NavLink to={"/ishchilar"}><a href="#">Производители</a></NavLink></li>
                    <li><NavLink to={"/proect"}><a href="#">Наши проекты</a></NavLink></li>
                    <li><NavLink to={"/kampaniya"}><a href="#">О компании</a></NavLink>
                        <ul className='header_small_menu'>
                            <li><a href="#">Новости </a></li>
                            <li><a href="#">Сертификаты</a></li>
                            <li><a href="#">Вакансии</a></li>
                        </ul>
                    </li>
                    <li><NavLink to={"/contact"}><a href="#">Контакты</a></NavLink></li>
                    <div className='animation start-home'></div>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </ul>
                <div className='nav_menu'>
                    <button
                        className="nav-btn menu"
                        onClick={showNavbar}>
                        <FaBars />
                    </button>
                </div>
            </section>
        </header>
    )
}

export default Navbar
