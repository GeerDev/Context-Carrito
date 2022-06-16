import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Products from './components/Products/Products';
import Header from './components/Header/Header';
import { UserProvider } from './context/UserContext/UserState';
import { ProductsProvider } from './context/ProductsContext/ProductsState';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ProductsProvider>
        <BrowserRouter>
        <Header />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/products" element={<Products />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </ProductsProvider>
      </UserProvider>
    </div>

  );
}

export default App;
