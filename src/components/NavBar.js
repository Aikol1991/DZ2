import { NavLink } from "react-router-dom";


export default function Navbar() {

    return(
        <ul className="links">
            <li>
                <NavLink to="/">Main</NavLink>
            </li>
            <li>
                <NavLink to="/photos">Photos</NavLink>
            </li>
        </ul>
    )
}