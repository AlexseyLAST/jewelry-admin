import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { CATEGORIES, DASHBOARD } from "../utils/consts";

function Sidebar() {
    return (
        <div className="sidebar">
            <Link to={DASHBOARD}>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <span className="logo-text">Jewelry.shop</span>
                </div>
            </Link>
            <nav className="sidebar-nav">
                <Link to={DASHBOARD} className="sidebar-nav__link">
                    Главная
                </Link>
                <Link to={CATEGORIES} className="sidebar-nav__link">
                    Категории
                </Link>
                <Link to={CATEGORIES} className="sidebar-nav__link">
                    Товары
                </Link>
                <Link to={CATEGORIES} className="sidebar-nav__link">
                    Заказы
                </Link>
            </nav>
            <p className="sm-text">&copy;2025, Jewelry.shop. Все права защищены</p>
        </div>
    );
}

export default Sidebar;