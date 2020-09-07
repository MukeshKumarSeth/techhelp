import React ,{Component} from 'react';

class UserListTable extends Component{
    render(){
        return(
            <div>
                <table>
                    <thead>
                    <tr><th>Id</th><th>First Name</th><th>Last Name</th><th>User Email</th></tr>
                    </thead>
                    <tbody>

                        {this.props.value.map(result=>(
                              <tr key={result.id}>
                              <td>{result.id}</td>
                              <td>{result.f_name}</td>
                              <td>{result.f_lame}</td>
                              <td>{result.email}</td>
                          </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}
export default UserListTable;