import React, { useState } from 'react'
import {Form ,Button} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {userRegister} from '../Action/RegisterAction'
export function Register(props){
    const {history} = props
    const [register ,setRegister] = useState({})
    const [custMsg , setCustMsg] = useState('')

    const state = useSelector(state=>state)
    const {registerError} = state
    console.log(register,'register value')
    const dispatch = useDispatch()
    const handlChange=(e)=>{
        setRegister({...register,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
       e.preventDefault()
       if(register.password == register.Conform_Password){
          dispatch(userRegister(register,history));
       }
       else{
          setCustMsg('Password does not match')
       }
      
             
    }
    return(
        <div className="Registerblock" >
           <h3 style={{marginLeft:'80px'}}>Register your details here!!! </h3>
            <div style={{marginLeft:'80px'}}>
            {registerError && registerError.username && <p>{registerError.username[0]}</p>}
            {registerError && registerError.email && <p>{registerError.email[0]}</p>}
            <div style={{color:'red'}}>{custMsg}</div>
            </div>
           <Form className='register-box' onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><b>Username</b></Form.Label>
                    <Form.Control style={{width:'400px'}}
                     name="username"
                      placeholder="Enter username" 
                      value={register.username}
                      required
                      onChange={handlChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><b>Email</b></Form.Label>
                    <Form.Control style={{width:'400px'}}
                     name="email" 
                     value={register.email}
                     required
                     placeholder="Enter username" 
                     onChange={handlChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control style={{width:'400px'}} 
                    name="password" 
                    type="password"
                    value={register.password}
                    placeholder="Password" 
                    required
                    onChange={handlChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><b>Conform Password</b></Form.Label>
                    <Form.Control style={{width:'400px'}} 
                    name="Conform_Password" 
                    type="password"
                    placeholder="Enter username" 
                    value={register.Conform_Password}
                    onChange={handlChange}/>
                </Form.Group>
               
                <Button style={{marginLeft:'150px'}} variant="primary" type="submit">
                    Submit
                </Button>
                <Link to="/login" style={{ color: "blue" ,marginLeft:'15px'}}>
                            Login
                    </Link>
            </Form>
        </div>
    )
}