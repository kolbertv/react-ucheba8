import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';

// import '../styles/home.scss'
import Posts from '../components/posts';


export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            users: []
        };

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((responce)=> [
                this.setState({
                    posts:responce.data
                })
            ]);

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((responce)=> [
                this.setState({
                    users:responce.data
                })
            ])


    }




    render() {

        if (!this.state.posts.length &&!this.state.users.length) {
            return null
        }

        return (
            <div>
                <p>HOME</p>
                <Posts posts = {this.state.posts} users = {this.state.users}></Posts>
                {/*<h2>{(this.state.posts ? this.state.posts[0].title : '')}</h2>*/}
            </div>
        )
    }
}

