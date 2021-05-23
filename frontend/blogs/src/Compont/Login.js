import React from 'react'
import { Form, Button, Row, Col, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { userlogin } from '../Action/LoginAction'
import Loading from './Londing';
function Login(props) {
    const { history } = props
    console.log(history, 'history')
    const [login, setLogin] = useState({})
    // console.log(login,'login info')
    const dispatch = useDispatch()
    const initState = useSelector(state => state)
    const { loginError, loading } = initState
    console.log(loginError, 'login Error')


    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userlogin(login, history));
    }
    return (
        <div class='loginForm1' style={{ width: '35%', margin: 'auto' }}>
            <h3>login..... </h3>
            {/* {loading && <Loading/>} */}
            {loginError && <p >{loginError}</p>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><b >User Name</b></Form.Label>
                    <Form.Control style={{ width: '300px', marginLeft: '85px' }} name="username" placeholder="Enter username" onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label><b >Password</b></Form.Label>
                    <Form.Control style={{ width: '300px', marginLeft: '85px' }} name="password" placeholder="Password" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Row className="py-3">
                    <Col>
                        New User ?{" "}
                        <Link to="/register" style={{ color: "blue" }}>
                            Register
                    </Link>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Login