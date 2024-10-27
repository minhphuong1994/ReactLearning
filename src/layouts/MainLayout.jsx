import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"


const MainLayout =() =>{
    return (
        <>
            <Navbar/>
            {/* Outlet is where the children inserted into this wrapper */}
            <Outlet/>
        </>
    )
}

export default MainLayout