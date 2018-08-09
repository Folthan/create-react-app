import React from 'react'
import { Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import ShopPage from '../pages/Shop';

const Main = (props) => {
	return (
		<main className="row">
			<Route exact path="/" component={HomePage} />
			<Route path="/shop" component={ShopPage} />
			<Route path="/about" component={AboutPage} />
		</main>
	)
}

export default Main;