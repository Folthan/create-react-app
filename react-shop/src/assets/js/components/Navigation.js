import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ShopPage from './pages/Shop';

const Navigation = () => (
    <Router>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/about" component={About} />
        </nav>
    </Router>
  );
  
  const Home = () => (
    <HomePage />
  );

  const Shop = () => (
    <ShopPage />
  );
  
  const About = ({ match }) => (
    <AboutPage />
  );
  
  export default Navigation;