import React from 'react';

// import '../styles/user.scss'

export default class User extends React.Component {

    render() {
        return (
            <div>
                <p>Имя: {this.props.name}</p>
                <p>Ник:  {this.props.username}</p>
                <p>емайл:  {this.props.email}</p>
                <hr/>
            </div>
        )
    }
}

