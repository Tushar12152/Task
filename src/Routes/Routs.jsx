import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";

import UsersList from "../Componets/UsersList";
import UsersDetails from "../Componets/UsersDetails";

const Routs = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
               path:'/',
               element:<Home/>

            },
            {
                path:'/users-list',
                element: <UsersList/>
            },
            {
                path:'/users/:id',
                element:<UsersDetails/>,
                loader:({params})=>fetch(`https://dummyjson.com/users/${params.id}`)
            }
        ]
    }
])

export default Routs;