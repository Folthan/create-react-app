import React, { Component } from 'react';
import './App.css';

import Header from './assets/js/components/Header';
import Footer from './assets/js/components/Footer';
import Navigation from './assets/js/components/Navigation'

class App extends Component {
  render() {
    return (
		<body className="App">
			<Header />
			<Navigation />
			<Footer />
		</body>
    );
  }
}

export default App;
