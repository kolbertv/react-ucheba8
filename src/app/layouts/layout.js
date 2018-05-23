import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import Home from "../pages/home";
import Users from "../pages/users";
import Menu from "../components/menu";
import User from "../pages/user";




import '../styles/layout.scss'


export default class Layout extends React.Component {
    render() {
        return (
            <div className={'appContainer'}>
                <Menu/>
                <main className={'main'}>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/users' component={Users}/>
                        <Route path='/user/:userId' component={User}/>
                        <Route render={() => <h1>Page not found Страница не найдена</h1>}/>
                    </Switch>
                </main>
            </div>
        )


    }

}

