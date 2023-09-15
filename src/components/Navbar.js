
import {React} from "react";
import navbarImg from "../assets/cart.png"
import logosmallImg from "../assets/logo-small.png"
import Searchbar from "./Searchbar";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';




function Navbar() {



    return (
      <nav className={"navbar navbar-expand-lg navbar-light bg-light"} >
      <div className={"container px-4 px-lg-5"}>
        <img src={logosmallImg} alt="alt-test" />
        

              
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                  <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                  <li class="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/products" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a className="dropdown-item" href="/products">All Products</a></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li><a className="dropdown-item" href="/login">Profile Page</a></li>
                          <li><a className="dropdown-item" href="#!">Log Out</a></li>
                      </ul>
                  </li>
              </ul>
              
              
            
              
      </div>

              <form className="d-flex">
                  <button className="btn btn-outline-dark" type="submit">
                    <img src={navbarImg} alt="cart" />
                      Cart
                      <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                  </button>

                 
                  <Link to="/Login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
                 
              </form>
        
      </div>
      </nav>

    );
  }
   
  export default Navbar;