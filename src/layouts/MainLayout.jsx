import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout =() =>{
    return (
        <>
            <Navbar/>

            {/* Outlet is where the children inserted into this wrapper */}
            <Outlet/>

            {/* ToastContainer can be anywhere since its css position is 'absolute' */}
            <ToastContainer/>
        </>
    )
}

export default MainLayout