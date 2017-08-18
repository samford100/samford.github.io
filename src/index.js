import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Routes from './Routes'
import registerServiceWorker from './registerServiceWorker';
import './style.css'


ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
