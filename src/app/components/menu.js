import React from 'react';
import {Link} from 'react-router-dom';
// import '../styles/menu.scss'


export default class Menu extends React.Component {


    render() {
        return (
            <nav className={'navMenu'}>
                <ul>
                    <li><Link exact to='/'>Главная</Link></li>
                    <li><Link to='/users'>Пользователи</Link></li>
                </ul>
                <hr/>
            </nav>

        )
    }
}

