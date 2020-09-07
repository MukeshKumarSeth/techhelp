import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';




function Alert_demo() {
  return (
    <Container>
        {/* {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(//to crate dropdown btn
    (variant) => (
      <>
        <SplitButton
          key={variant}
          id={`dropdown-split-variants-${variant}`}
          variant={variant.toLowerCase()}
          title={variant}
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Active Item
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </SplitButton>{' '}
      </>
    ),
  )} */}
      {/* <Carousel>it is used to crate slider images etc
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}
      {/* <Button pill variant="primary">to create badges with button
        Demo Button <Badge variant="light">9</Badge>
        <span className="sr-only">unread messages</span>
      </Button> */}
  {/* <Media> to create a paragraf container
    <img
      width={64}
      height={64}
      className="align-self-start mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5  style={{ backgroundColor: 'pink' }}>Media Heading</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media> */}


      {/* <Row>
        <Col md>First, but unordered</Col>
        <Col md={{ order: 12 }}>Second, but last</Col>
        <Col md={{order:3}}>second, but Third</Col>
        <Col md={{ order: 1 }}>Third, but second</Col>
      </Row> */}
    </Container>
//   <Container >
//   {/* Stack the columns on mobile by making one full-width and the other half-width */}
//   <Row>
//     <Col xs={12} md={8}>
//       xs=12 md=8
//     </Col>
//     <Col xs={6} md={4}>
//       xs=6 md=4
//     </Col>
//   </Row>

//   {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
//   <Row>
//     <Col xs={6} md={4}>
//       xs=6 md=4
//     </Col>
//     <Col xs={6} md={4}>
//       xs=6 md=4
//     </Col>
//     <Col xs={6} md={4}>
//       xs=6 md=4
//     </Col>
//   </Row>

//   {/* Columns are always 50% wide, on mobile and desktop */}
//   <Row>
//     <Col xs={6}>xs=6</Col>
//     <Col xs={6}>xs=6</Col>
//   </Row>
// </Container>
    // <div className="alert alert-danger alert-dismissible fade show" role="alert">
    //   <strong>Oh snap! You got an error!</strong> 
    //   <p> 
    //     Change this and that and try again.
    //   </p>
    //   <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    //     <span aria-hidden="true">&times;</span>
    //   </button>
    // </div>
  )
}
export default Alert_demo;
