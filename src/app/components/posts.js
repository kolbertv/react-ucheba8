import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

// import '../styles/home.scss'
import Post from '../components/post';

export default class Posts extends React.Component {

    render() {

            let posts = this.props.posts.map((post, index)=> {
                let userName = this.props.users.map((user, index)=> {
                    if (post.userId === user.id) {
                        return user.username
                    }
                });
                return <Post key = {index} {...post} userName = {userName}/>
            });

        return (
            <div>
                {posts}
            </div>
        )
    }
}

