import homeIcon from "../assets/images/menu/home.svg";
import categorieaIcon from "../assets/images/menu/categories.svg";
import productsIcon from "../assets/images/menu/products.svg";
import ordersIcon from "../assets/images/menu/orders.svg";
import { Link } from "react-router-dom";

import {
    DASHBOARD,
    CATEGORIES,
    CREATE_CATEGORY,
    DELETE_CATEGORY,
    UPDATE_CATEGORY,
} from "../utils/consts";

function Dashboard() {
    return (
        <section className="block">
            <div className="container">
                <h1 className="title">Админ панель</h1>
                <div className="dashboard-list">
                    <Link to={DASHBOARD} className="dashboard-item bg-primary">
                        <img src={homeIcon} alt="Home" />
                        <h3 className="dashboard-item__title">Главная</h3>
                    </Link>
                    <Link to={CATEGORIES} className="dashboard-item bg-warning">
                        <img src={categorieaIcon} alt="Category" />
                        <h3 className="dashboard-item__title">Категории</h3>
                    </Link>
                    <Link to={CREATE_CATEGORY} className="dashboard-item bg-danger">
                        <img src={productsIcon} alt="Products" />
                        <h3 className="dashboard-item__title">Товары</h3>
                    </Link>
                    <Link to="#" className="dashboard-item bg-success">
                        <img src={ordersIcon} alt="Orders" />
                        <h3 className="dashboard-item__title">Заказы</h3>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;