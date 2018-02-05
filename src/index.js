// - Imports
import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// - Routes
const Client = () => (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>~ Health Hub ~</title>
      </Helmet>
      <Router>
        <div>
          <Route path='/' component={App}/>
        </div>
      </Router>
    </div>



);

// - Render
ReactDOM.render(<Client/>, document.getElementById('root'));

// - Service Workers
// lregisterServiceWorker();  // Enable on first, MVP deployment.
