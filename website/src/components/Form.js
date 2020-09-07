    import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            f_name:'',
            l_name:'',
            email:'react'
        }
    }
    handalInputChange=(event)=>{
        this.setState({
            f_name:event.target.value
            
        })
    }
    handall_nameChange=(event)=>{
        this.setState({
            l_name:event.target.value
        })
    }
    handalOptionChange=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    handalSubmit=event=>{//we can write orgument without pranthecis
        // alert(`${this.state.f_name} ${this.state.l_name} ${this.state.option}`);
        
        event.preventDefault();
        const url="http://localhost:3001/insertUser";
        var data = new URLSearchParams();
        for(const pair of new FormData(event.target)){
            data.append(pair[0],pair[1]);
            
        }    
        // const myHeader=new Headers()
        // var data={
        //     f_name: "Mukesh Kumar Soni",
        //     l_name: "ddd",
        //     email: "react"
        // };
        // console.log(data)
        //var data=this.state;
        fetch(url,{
            method:"POST",
            body:data,
            // body:JSON.stringify(data),
        //    headers:{'Content-Type':'application/json'},//in case of form data it is not required
        }).then(res=>res.json()).then(res2=>console.log(res2))
    }
    render() {
        return (
            <form onSubmit={this.handalSubmit}>
                <div>
                    <label>User Name</label>
                    <input type="text" name="f_name" value ={this.state.f_name} onChange={this.handalInputChange}/>
                </div>
                <div>
                    <label>User Address</label>
                    <textarea name="l_name" value ={this.state.l_name} onChange={this.handall_nameChange}/>
                </div>
                <div>
                    <label>Topic</label>
                    <select name="email" value={this.state.email} onChange={this.handalOptionChange}>
                        <option value="react">React</option>
                        <option value="node">Node</option>
                        <option value="php">PHP</option>
                    </select>
                </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>
        )
    }
}
 export default Form;