import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";

function Header() {
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const outPerson = () => {
    logout()
    navigate("/")
  }

  return (
    <nav className="header">
    <span>Header</span>
    <div>
        {
            token !== null ?     <>
                        <span onClick={outPerson}><Link to="/">Logout</Link></span>
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