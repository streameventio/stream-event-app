import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import 'bulma/css/bulma.css'

// import * as serviceWorker from './serviceWorker';

import Navbar from './components/common/Navbar/Navbar';

// import App from './components/App/App';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import PageNotFound from './components/PageNotFound/PageNotFound';

const routing = (
  <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
)



ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App/App';
// import * as serviceWorker from './serviceWorker';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();
