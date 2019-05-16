import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login';

import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/friends">Friends Page</Link>
            </li>
          </ul>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" />
        </div>
      </Router>
    );
  }

export default App;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
