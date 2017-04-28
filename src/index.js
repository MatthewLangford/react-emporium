import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './components/App/App';
import store from './store';
import {Provider} from 'react-redux';
const reactNode = document.getElementById('react-node');

ReactDOM.render(
    <Provider store={store}>
            <Router history={browserHistory}>
            <Route path='/' component={App}/>
            </Router>
            </Provider>
            , reactNode );
