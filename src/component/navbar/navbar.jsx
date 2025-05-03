import "../navbar/nav.css"
import {  NavLink } from "react-router-dom";
function Navbar () {
    return(
        <>
            <div className="nav-bar">
                <NavLink to = '/' className="bro" ><h1>My <span>Perfect</span>CV</h1></NavLink>
                <NavLink to = '/signup' className="buttoq">My Account</NavLink>
                <NavLink to = '/buildresume' className="butttom0001"> <button>Build My Resume</button> </NavLink>
            </div>
        </>
    )
}

export default Navbar;













