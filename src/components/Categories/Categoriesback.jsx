import { Link } from "react-router-dom";
import { CATEGORIES } from "../../utils/consts";

function Categoriesback(){
    return(
        <Link to={CATEGORIES} class="btn bg-danger">Назад</Link>
    );
}
export default Categoriesback;