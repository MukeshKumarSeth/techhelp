import React, { Component } from 'react';
import UserListTable from './UserListTable';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            users: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3001/getUserById/3";
        fetch(url, {
            method: "GET"
        }).then(res => res.json()).then(
            (result) => {
                this.setState({
                    users: result.userResult
                })
            },
            (error) => {
                this.setState({ error })
            }
        )
    }
    render() {
       const { error, users } = this.state;
        if (error) {
            return (<div> Error: {error.message} </div>)
        } else {
            // console.log(userList);
            return (
                <div>
                    <h1>This is User List </h1>
                    {/* <table>//we can make table in this page also
                        <thead>
                            <tr><th>Id</th><th>First Name</th><th>Last Name</th><th>User Email</th></tr>
                        </thead>
                        <tbody>
                            
                        {users.map(result=>(
                            <tr key={result.id}>
                                <td>{result.id}</td>
                                <td>{result.f_name}</td>
                                <td>{result.f_lame}</td>
                                <td>{result.email}</td>
                            </tr>
                            
                        ))}
                    </tbody>
                    </table> or we can create table component and get it here */}
                    <UserListTable value={users}/>
                </div>
            );
        }
    }
}
export default UserList;