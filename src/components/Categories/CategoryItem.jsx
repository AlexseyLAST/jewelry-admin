import { DELETE_CATEGORY, UPDATE_CATEGORY } from "../../utils/consts";
import { Link } from "react-router-dom";

function Categoryitem({category}) {
  return (
    <tr>
      <td>{category.id}</td>
      <td>{category.name}</td>
      <td colSpan="3" className="actions-category" style={{ border: "none" }}>
        <Link to={UPDATE_CATEGORY} className="btn bg-warning">Изменить</Link>
        <Link to={DELETE_CATEGORY} className="btn bg-danger">Удалить</Link>
      </td>
    </tr>
  );
}

export default Categoryitem;