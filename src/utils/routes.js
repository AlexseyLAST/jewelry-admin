import Categories from "../pages/Categories/Categories";
import CreateCategory from "../pages/Categories/CreateCategory";
import DeleteCategory from "../pages/Categories/DeleteCategory";
import UpdateCategory from "../pages/Categories/UpdateCategory";
import Dashboard from "../pages/dashboard";

import {
    DASHBOARD,
    CATEGORIES,
    CREATE_CATEGORY,
    DELETE_CATEGORY,
    UPDATE_CATEGORY
} from "./consts";

export const routes = [
    {
        path: DASHBOARD,
        element: Dashboard
    },
    {
        path: CATEGORIES,
        element: Categories
    },
    {
        path: DELETE_CATEGORY,
        element: DeleteCategory
    },
    {
        path: UPDATE_CATEGORY,
        element: UpdateCategory
    },
    {
        path: CREATE_CATEGORY,
        element: CreateCategory
    },
];