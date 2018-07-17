import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
console.log('process.env.NODE_ENV ', process.env.NODE_ENV);
ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
