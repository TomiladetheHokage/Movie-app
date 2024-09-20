import { Outlet } from "react-router-dom"
import Layout from "../layout/Layout"
import NowPlayingMovie from "../components/NowPlayingMovie";
import SignUp from "../app/auth/signUp";


const ROUTES = [

    {
        path: '',
        element: <Layout/>,
        children:[
            {
                path: '/',
                element:<NowPlayingMovie/>
            }
        ]
    },

    {
        path: '/signup',
        element: <SignUp/>
    },
    //
    // {
    //     path: '/login',
    //     element: <Login/>
    // },
    //
    // {
    //     path:'/about',
    //     element:<About/>
    // }
]
export default ROUTES