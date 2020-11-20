import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox'
import { Container, CardDeck, Card, Button } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <>
           <CarouselBox />
           <Container>
               <h2 className="text-center m-4">Our team</h2>
               <CardDeck>

                   <Card bg="warning" border="success" text="primary">
                   <Card.Img variant="top"
                             src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                   />
                   <Card.Body>
                       <Card.Title>Developers</Card.Title>
                       <Card.Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Card.Text>
                       <Button variant="primary">About team</Button>
                   </Card.Body>
               </Card>

                   <Card>

                       <Card.Body>
                           <Card.Title>Developers</Card.Title>
                           <Card.Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Card.Text>
                           <Button variant="primary">About team</Button>
                       </Card.Body>
                       <Card.Img variant="bottom"
                                 src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                       />
                   </Card>

                   <Card>
                       <Card.Img variant="top"
                                 src="https://images.pexels.com/photos/3182801/pexels-photo-3182801.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                       />
                       <Card.Body>
                           <Card.Title>Developers</Card.Title>
                           <Card.Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Card.Text>
                           <Button variant="primary">About team</Button>
                       </Card.Body>
                   </Card>
               </CardDeck>
           </Container>
            </>
        );
    }
}