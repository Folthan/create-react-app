import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import scss
import './assets/scss/main.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
