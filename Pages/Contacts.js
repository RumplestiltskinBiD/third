import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '500px'}}>
                <h1 className="text-center"> Contact us </h1>
                <Form>
                    <Form.Group ControlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="enter email" />
                        <Form.Text>
                            We'll never share your email with anyone else
                        </Form.Text>
                    </Form.Group>

                    <Form.Group ControlId="formBasicPassword">
                        <Form.Label>Example text area</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>

                    <Form.Group ControlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" >Submit</Button>
                </Form>
            </Container>
        );
    }
}