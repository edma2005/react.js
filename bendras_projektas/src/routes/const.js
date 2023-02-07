import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";

export const HOME_PATH = "/"
export const PRODUCT_LIST_PATH = "/category/:category"
export const PRODUCT_PATH = "/category/:category/:productId"
export const CART = "/cart"
export const LOGIN = "/login"

export const mainLayoutRoutes = {
    Layout: MainLayout,
    routes: [
        {
            path: HOME_PATH,
            Component: Home,
        },
        {
            path: PRODUCT_LIST_PATH,
            Component: Products,
        },
        {
            path: PRODUCT_PATH,
            Component: Product,
        },
        {
            path: CART,
            Component: Cart,
        },
        {
            path: LOGIN,
            Component: Login,
        }
    ]
}