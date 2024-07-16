import '../index.css'
import Navbar from '../layouts/Navbar';
import Register from "../register/Register";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";

export const ROUTES = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Navbar/>}/>
            < Route path="/register" element={<Register/>}/>

        </>
    )
);
