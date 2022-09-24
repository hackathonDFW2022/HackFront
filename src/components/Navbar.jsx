import { Avatar } from "./Avatar";
import { GiLindenLeaf } from "react-icons/gi";

const Navbar = () =>{
    return(
        <div className="flex justify-between bg-green-900 p-3 rounded-2xl opacity-90">
            <div className="flex gap-4 items-center">
                <div className="text-green-50 text-[2rem]"><GiLindenLeaf/></div>
            </div>
            <div className="flex gap-8 items-center text-green-300 text-1xl">
            <a href="#">Calculator</a>
            <a href="#">About</a>
            <a href="#"><Avatar/></a>    
            </div>
        </div>
    )
}


export default Navbar;