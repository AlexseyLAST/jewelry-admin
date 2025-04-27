import Categoriesback from "../../components/Categories/Categoriesback";

function DeleteCategory(){
    return(
        <section class="block">
        <div class="container">
            <h1 class="title">Вы действительно хотите удалить категорию "name"?</h1>
            <p class="mb-5">
                Это действие приведет к потере всех данных, связанных с этими категориями. Пожалуйста, подтвердите свое решение.
            </p>
            <form class="actions-sm">
                <button type="submit" class="btn bg-danger">
                    Да
                </button>
                <Categoriesback />
            </form>
        </div>
    </section>
    );
}

export default DeleteCategory;