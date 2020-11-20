import React, { useRef } from 'react';
import { NavLink } from "react-router-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from 'react-bootstrap';

export const HeaderComponent = React.forwardRef((props, ref) => {
    const { Home } = ref;
    return (
        <div className="global-header" ref={Home}>
            <Navbar fixed='top' >
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-center">
                        {props.headerData.HeaderOption.map((data, index) => {
                            return (
                                <React.Fragment >
                                    <Nav.Link href="" onClick={() => props.handleOnClick(data)}>{data}</Nav.Link>
                                </React.Fragment>
                            )
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
)