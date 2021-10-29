import React from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FaceIcon from "@material-ui/icons/Face";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import HomeIcon from '@material-ui/icons/Home';

function Header(props) {


    return (
        <div>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand to='/'>Library Management System
                    </Navbar.Brand>
                    <Nav > 
                        <Nav.Link href="/login">Login</Nav.Link> 
                    </Nav>
                </Navbar>

            </div>
        </div>
    )
}

export default withRouter(Header)