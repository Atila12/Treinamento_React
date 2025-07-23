// links com react router
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            {/*<Link to="/">Home</Link>
            <Link to="/About">Sobre</Link>*/}
            <NavLink
                to="/"
            //className={({ isActive }) => (isActive ? 'Esta-Ativo' : 'Não-Ativo')}
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
            >
                Sobre
            </NavLink>
        </nav>
    );
};

export default Navbar;
