import { Avatar } from "./Avatar";
import { GiLindenLeaf } from "react-icons/gi";
import { Link } from 'react-router-dom'

const Navbar = () =>{
    return(
        <div className="flex justify-between bg-green-900 p-3 rounded-2xl opacity-90 shadow">
            <div className="flex gap-4 items-center">
                <div className="text-green-50 text-[2rem]"><GiLindenLeaf/></div>
            </div>
            <div className="flex gap-8 items-center text-green-300 text-1xl">
            <Link to="/form">Green Test</Link>
            <Link to="/">About</Link>
            <Link to="/dashboard">Dashboard</Link>
            <a href="#"><Avatar/></a>    
            </div>
        </div>
    )
}


export default Navbar;