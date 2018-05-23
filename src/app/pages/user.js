import React from 'react';
import axios from 'axios';


// import '../styles/user.scss'


export default class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        };

        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.userId}`)
            .then((responce) => {
                this.setState({
                    user: responce.data
                })
            })
    }

    render() {

        if (!this.state.user) {
            return null
        }

        return (

            <div>
                <p>Имя: {this.state.user.name}</p>
                <p>Ник:  {this.state.user.username}</p>
                <p>емайл:  {this.state.user.email}</p>
                <hr/>
            </div>
        )
    }
}

