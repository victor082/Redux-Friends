import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
    return (
        <div className="App">
            <header>
            </header>
        </div>

    )
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
