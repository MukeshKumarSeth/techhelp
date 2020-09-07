import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from "react-router-dom";

export default class HomePageBody extends Component {

    constructor(props){
        super(props);
        this.state={
            fullName:'',
            email:'',
            password:'',
            address:'',
            city:'',
            state:'',
            zip:'',
            gender:''
        }
    }
    inputChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }

      submitDataHandler=event=>{//we can write orgument without pranthecis
        event.preventDefault();
        const url="http://localhost:3002/saveUser";
        var data = new URLSearchParams();
        for(const pair of new FormData(event.target)){
            data.append(pair[0],pair[1]);
        }    
        fetch(url,{
            method:"POST",
            body:data,
        }).then(res=>res.json()).then(res2=>{
            console.log(res2);
            if(res2.status){
                console.log(res2.token);
                sessionStorage.setItem('resData','MasterMk');
                this.props.history.push('/dashboard');
                localStorage.setItem('slamBooktoken',res2.token);
            }else{
                console.log('else');
            }
        });
    }
    render() {
        return (
            <Container fluid>
                <Row >
                    <Col xs={7} style = {{ backgroundImage: `url(/bgGif.gif)`,backgroundPosition: 'center' ,backgroundRepeat: 'no-repeat'}}>
                    </Col>
                    <Col>
                        <Container>
                            <Row>
                                <Col><h3>Create Your Slambook Account</h3></Col>
                            </Row>
                            <Form className="mb-1" onSubmit={this.submitDataHandler}>
                                <Form.Group controlId="formGridAddress2">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control name="fullName" onChange={this.inputChangeHandler}/>
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" onChange={this.inputChangeHandler} placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" onChange={this.inputChangeHandler} placeholder="Password" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control name="address" onChange={this.inputChangeHandler} placeholder="1234 Main St" />
                                </Form.Group>
                               
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control name="city" onChange={this.inputChangeHandler}/>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control as="select" name="state" onChange={this.inputChangeHandler} defaultValue="Choose...">
                                            <option>Choose</option>
                                            <option>Varanasi</option>
                                            <option>Suriyava</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control name="zip"/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group id="formGridCheckbox">
                                    <Form.Check inline name="gender" id="male" value={1} onChange={this.inputChangeHandler} type="radio" label="Male" />
                                    <Form.Check inline name="gender" id="female" type="radio" value={2} onChange={this.inputChangeHandler} label="Female" />
                                    <Form.Check inline name="gender" id="author" type="radio" value={3} onChange={this.inputChangeHandler} label="Author" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

// function login() {
//     const history = useHistory();
//     history.push("/profile");
// }