import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import User from "../pages/User";
import CreateUser from "../pages/CreateUser";
import Product from "../pages/Product";
import CreateProduct from "../pages/CreateProduct";
import Command from "../pages/Command";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <User />
            },
            {
                path: "user/create",
                element: <CreateUser />
            },
            {
                path: "product",
                element: <Product />
            },
            {
                path: "product/create",
                element: <CreateProduct />
            },
            {
                path: "command",
                element: <Command />
            }
        ]
    }
]);
