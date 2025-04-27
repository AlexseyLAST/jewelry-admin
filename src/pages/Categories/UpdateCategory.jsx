import Categoriesback from "../../components/Categories/Categoriesback";

function UpdateCategory() {
    return (
      <section className="content">
        <div className="block">
          <div className="container">
            <Categoriesback />
            <h1 className="title">Изменить категорию</h1>
            <form className="form">
              <div className="form-control">
                <label htmlFor="name">Название категории</label>
                <input
                  value=""
                  id="name"
                  type="text"
                  placeholder="Введите категорию"
                  required
                />
              </div>
              <button className="btn bg-warning" type="submit">Изменить</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  
  export default UpdateCategory;