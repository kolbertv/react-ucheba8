import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import '../styles/post.scss'

export default class Post extends React.Component {

    render() {
        return (
            <div className='post'>
                <h4>Тема: {this.props.title}</h4>
                <h4>Имя пользователя: <Link to={`/user/${this.props.userId}`}>{this.props.userName}</Link></h4>
                <p>Сообщение: {this.props.body}</p>
                <hr/>
            </div>
        )
    }
}

