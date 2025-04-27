import Categoriesback from "../../components/Categories/Categoriesback";

function CreateCategory(){
    return(
        <section class="block">
            <div class="container">
                <Categoriesback />
                <h1 class="title">Создать категорию</h1>
                <form class="form">
                    <div class="form-control">
                        <label form="name">Название категории</label>
                        <input 
                            value=""
                            id="name" 
                            type="text" 
                            placeholder="Введите категорию" 
                            required 
                        />
                    </div>
                    <button class="btn bg-primary" type="submit">Создать</button>
                </form>
            </div>
        </section>
    );
}

export default CreateCategory;