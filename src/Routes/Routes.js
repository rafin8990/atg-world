import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Love from "../Components/Love";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/love',
        element:<Love></Love>
    }

])