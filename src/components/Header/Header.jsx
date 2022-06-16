import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";

function Header() {
    const { token } = useContext(UserContext);
  return (
    <nav className="header">
    <span>Header</span>
    <div>
        {
            token ?     <>
                        <span><Link to="/">Logout</Link></span>
                        <span><Link to="/profile">Profile</Link></span>
                        </>  :  
            <span>
            <Link to="/">Login</Link>
            </span>
        }

        <span>
            <Link to="/products">Products</Link>
        </span>
    </div>
  </nav>
  )
}

export default Header