import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" >Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" >Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth" >Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth" >Libraries</Nav.Link>
                                </Nav.Item>

                            </Nav>

                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3'>

                                <Tab.Pane eventKey="first">
                                <img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif"
                                alt='Design'
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Praesent aliquam, justo convallis luctus rutrum, erat
                                    nulla fermentum diam, at nonummy quam ante ac quam.
                                </p>
                            </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <img src="https://www.hexacta.com/wp-content/uploads/2018/07/5-clues-to-keep-your-software-development-team-productive-11.jpg"
                                         alt='Team'
                                    />
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Praesent aliquam, justo convallis luctus rutrum, erat
                                    nulla fermentum diam, at nonummy quam ante ac quam.
                                </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent aliquam, justo convallis luctus rutrum, erat
                                        nulla fermentum diam, at nonummy quam ante ac quam.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <img src="https://miro.medium.com/max/400/1*A03J1K0q2RfSs5LNr6aHTw.png"
                                         alt='Programming'
                                    />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent aliquam, justo convallis luctus rutrum, erat
                                        nulla fermentum diam, at nonummy quam ante ac quam.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fourth">
                                    <img src="https://coderseye.com/wp-content/uploads/What-are-JavaScript-Libraries.jpg"
                                         alt='Frameworks'
                                    />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent aliquam, justo convallis luctus rutrum, erat
                                        nulla fermentum diam, at nonummy quam ante ac quam.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fifth">
                                    <img src="https://content.techgig.com/thumb/msid-77480270,width-860,resizemode-4/Top-25-Enterprise-Programming-Languages-for-developers.jpg?150543"
                                         alt='Libraries'
                                    />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent aliquam, justo convallis luctus rutrum, erat
                                        nulla fermentum diam, at nonummy quam ante ac quam.
                                    </p>
                                </Tab.Pane>

                            </Tab.Content>

                        </Col>
                    </Row>

                </Tab.Container>

            </Container>
        );
    }
}