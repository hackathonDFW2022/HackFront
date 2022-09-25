import { Avatar } from "./Avatar";
import { GiLindenLeaf } from "react-icons/gi";
import { Link } from 'react-router-dom'


const Navbar = () =>{
    return(
        <div className="flex justify-between transparent py-3  opacity-90 px-96 sticky top-0">
            <div className="flex gap-4 items-center">
              <Link to="/">
                <div className="text-green-900 flex items-center gap-2">
                    <GiLindenLeaf className="text-3xl"/>
                    <h2 className="text-gray-900 text-2xl font-bold">Green Beings</h2>
                </div>
              </Link> 
            </div>
            <div className="flex gap-8 items-center text-green-700 text-1xl">
            <Link to="/form">Green Test</Link>
            {/* <Link to="/">About</Link> */}
            <Link to="/dashboard">Dashboard</Link>

            <a href="#"><Avatar/></a>    
            </div>
        </div>
    )
}


export default Navbar;