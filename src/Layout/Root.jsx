import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/NavBar";


const Root = () => {
    return (
        <div className="max-w-[1240px] mx-auto">
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Root;