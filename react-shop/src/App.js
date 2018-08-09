import React, { Component } from 'react';

// Import compontents
import Header from './assets/js/components/Header';
import Footer from './assets/js/components/Footer';
import Navigation from './assets/js/components/Navigation';
import Main from './assets/js/components/containers/Main';

class App extends Component {
  render() {
    return (
		<body className="container">
			<Header />
			<Navigation />
			<Main />
			<Footer />
		</body>
    );
  }
}

export default App;
