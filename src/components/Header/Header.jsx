import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { ShoppingCartOutlined, Badge } from "@ant-design/icons";

function Header() {
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="header">
      <span>Header</span>
      <div>
        {token ? (
          <>
            <span onClick={logoutUser}>
              <Link to="/">Logout</Link>
            </span>
            <span>
              <Link to="/profile">Profile</Link>
            </span>
            <span>
              <Link to="/cart">
                <ShoppingCartOutlined />
              </Link>
            </span>
          </>
        ) : (
          <span>
            <Link to="/">Login</Link>
          </span>
        )}

        <span>
          <Link to="/products">Products</Link>
        </span>
      </div>
    </nav>
  );
}

export default Header;
