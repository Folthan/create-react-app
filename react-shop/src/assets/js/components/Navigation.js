import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
        <nav className="row">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
  );
  
  export default Navigation;