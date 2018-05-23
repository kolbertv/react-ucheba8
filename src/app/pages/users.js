import React from 'react';
import {fetchUsers} from '../actions/usersActions';
import {connect} from 'react-redux';
import User from "../components/user";

class Users extends React.Component {
    constructor() {
        super(...arguments);

        let users = fetchUsers(); //Вызываем метод получения пользователей
        this.props.dispatch(users);
    }

    render() {

        if (!this.props.users.length) {
            return null
        }


        let usersCont = this.props.users.map((user,index)=> {

            return <User key={index} {...user} />

        });


        return (
            <div>
                {this.props.is_fetching ? 'идет загрузка' : 'данные загрузились'}
                {usersCont}

            </div>
        )

    }
}

function mapStateToProps(store) {
    return {
        users: store.users.users,
        is_fetching: store.users.is_fetching
    };
}

export default connect(mapStateToProps)(Users);