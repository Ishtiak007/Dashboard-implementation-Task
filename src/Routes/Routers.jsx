import {
    createBrowserRouter,
} from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Dashboard from "../Layout/Dashboard";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import PrivateRoute from "./PrivateRoute";
import MyProject from "../Components/MyProject/MyProject";
import Projects from "../Components/Projects/Projects";
import CardDetails from "../Components/CardDetails/CardDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'myProject',
                element: <MyProject></MyProject>
            },
            {
                path: 'projectsCard',
                element: <Projects></Projects>
            },
            {
                path: 'cardDetails/:id',
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/projects/${params.id}`)
            }
        ]
    }
]);