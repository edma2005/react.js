import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";

const HOME_PATH = "/"
const PRODUCT_LIST_PATH = "/:category"

export const routes = [
    {
        path: HOME_PATH,
        Component: Home,
    },
    {
        path: PRODUCT_LIST_PATH,
        Component: Products,
    }

]