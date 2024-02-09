import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

const Routs = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
               path:'/',
               
            }
        ]
    }
])

export default Routs;