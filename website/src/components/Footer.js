import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default class Footer extends Component {
    render() {
        return (
            <Container fluid  style={{backgroundColor: '#494b4d',color:'white'}}>
                <Row>
                    <Col><p>this is check for Footer</p>
                    <p>this is check for Footer</p>
                    <p>this is check for Footer</p>
                    <p>this is check for Footer</p>
                    <p>this is check for Footer</p>
                     </Col>
                </Row>
            </Container>
        )
    }
}