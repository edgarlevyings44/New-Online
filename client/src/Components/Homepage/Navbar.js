
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import SearchBar from "./Searchbar";
import "./Navbar.css";
import "./Input.css";
import SearchResultPage from "./SearchResultPage";
import exampleImage from '../Assets/Frame53.png'

export const Navbar = ({cart, customer, setCustomer, handleAddToCart, resetSearchResults}) => {

  const [resetSearchKey, setResetSearchKey] = React.useState(0);
  const navigate = useNavigate()
  const location = useLocation();

  const handleLogout = () => {
    fetch('/logout', {
      method:'DELETE'
    })
    .then((response) => response.json())
    .then((data) => {
      window.alert("Logged out!!")
      setCustomer(null)
      navigate('/')
    })
  }

  const handleOrder = (event) => {
    const selectedOption = event.target.value

    if (selectedOption === 'myorders'){
      navigate('/myorders')
    }
  }
  return (
    <div className="navbar_navbar">
      <div className="navbar_logo">
        <Link to="/" onClick={() => setResetSearchKey((prevKey) => prevKey + 1)}>
          {/* <img src="https://i.im.ge/2024/01/29/bLwiCS.WhatsApp-Image-2024-01-29-at-14-40-27.jpg" alt="Denitelogo" /> */}
          <img src={exampleImage} alt="Dedanitelogo" />
        </Link>
      </div>
      <div className="navbar_links">
      <Link to="/all-categories" 
          onClick={() => setResetSearchKey((prevKey) => prevKey + 1)}> 
          All Categories
        </Link>
        <Link to="/top-categories" 
          onClick={() => setResetSearchKey((prevKey) => prevKey + 1)}> 
          Top Categories
        </Link>
        <Link to="/fruits-and-vegetables" 
          onClick={() => setResetSearchKey((prevKey) => prevKey + 1)}> 
          Fruits & Vegetables 
        </Link>
        <Link to="/cold-drinks-and-juices" 
          onClick={() => setResetSearchKey((prevKey) => prevKey + 1)}>
          Cold Drinks & Juices 
        </Link>
        <Link to="/snacks-and-munchies" 
          onClick={() => setResetSearchKey((prevKey) => prevKey + 1)}> 
          Snacks & Munchies 
        </Link>
        <Link to="/featured-brands" 
          onClick={() => setResetSearchKey((prevKey) => prevKey + 1)}>
          Featured Brands 
        </Link>
      </div>

      <div className="navbar_login-cart" onClick={() => setResetSearchKey((prevKey) => prevKey + 1)}>

        {customer ? (
          <div className="navbar_user">
            <h1>Welcome {customer.name}</h1>
            <button onClick={handleLogout}>Logout</button>

            <select className="select" onChange={handleOrder}>
              <option value="">My Account</option>
              <option value="myorders">Orders</option>
            </select>
          </div>
        ) : (
          <Link to="/login" className="navbar_login"> Login </Link>
        )}
        
      </div>

      <div className="navbar_login-cart">
      <Link to="/cart" className="navbar_cart" onClick={() => setResetSearchKey((prevKey) => prevKey + 1)}>
          <ShoppingCart size={32} />
          Cart ({cart.length})
        </Link>
      </div>
      <SearchBar key={resetSearchKey} handleAddToCart={handleAddToCart}/>
      {location.pathname === '/search-result' && (
        <SearchResultPage handleAddToCart={handleAddToCart} />
      )}
    </div>
  );
};
