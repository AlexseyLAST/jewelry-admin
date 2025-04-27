import { Link } from "react-router-dom"
import Categorylist from "../../components/Categories/CategoryList";
import { CREATE_CATEGORY } from "../../utils/consts";

function Categories() {
    return (
        <section className="block">
            <div className="container">
                <div className="block-header">
                    <h1 className="title">Категории</h1>
                    <Link to={CREATE_CATEGORY} className="btn bg-primary">Создать</Link>
                </div>
                <Categorylist />
            </div>
        </section>
    );
}

export default Categories;