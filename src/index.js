import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './app/stores/store';

import './app/styles/index.scss'


import Layout from './app/layouts/layout'

const app = document.getElementById('app');


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    </Provider>

    , app);
