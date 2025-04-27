import { Routes, Route } from "react-router-dom";
import { routes } from "../utils/routes";

function Approuter() {
    return (
        <Routes>
            {routes.map((route, index) => {
                const Component = route.element;
                return <Route key={index} path={route.path} element={<Component />} />;
            })}
        </Routes>
    );
}

export default Approuter;