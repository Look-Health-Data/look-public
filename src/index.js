// - Imports
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import store from './store';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// - App
ReactDOM.render(
  <ApolloProvider client={store}>
    <Router>
      <div>
        <Route path='/' component={App}/>
      </div>
    </Router>
  </ApolloProvider>,
  
  document.getElementById('root'));

// - Service Workers
// lregisterServiceWorker();  // Enable on first, MVP deployment.
