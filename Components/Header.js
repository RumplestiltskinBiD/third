import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    FormControl,
    Container,
    Form,
    Button,
    NavLink
} from 'react-bootstrap';
import logo from "./Ice.jpg"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from '../Pages/Home';
import Blog from '../Pages/Blog';
import Contacts from '../Pages/Contacts';
import About from '../Pages/About';

export default class Header extends Component {
    render() {
        return (
            <>
            <Router>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
<Navbar.Brand href="/">
    <img
    src={logo}
    height="30"
    width="30"
    className="d-inline-block align-top"
    alt="Logo"
    /> React site
</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav  className="mr-auto">
                            <NavLink as={Link} to ="/">Home</NavLink>
                            <NavLink as={Link} to="/about">About us</NavLink>
                            <NavLink as={Link} to="/contacts">Contacts</NavLink>
                            <NavLink as={Link} to="/blog">Blog</NavLink>
                        </Nav>
                        <Form inline>
                          <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                          />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/blog" component={Blog} />
                </Switch>
            </Router>
            </>
        );
    }
}
