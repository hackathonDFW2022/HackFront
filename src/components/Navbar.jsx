import { Avatar } from "./Avatar";


const Navbar = () =>{
    return(
        <div className="sticky top-0 flex justify-between font-sans items-center py-3 px-96 rounded-lg bg-opacity-90 bg-green-900">
            <div className="flex gap-4 items-center">
                
                <img src="/Anvil.svg" className="h-12" alt="" />
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