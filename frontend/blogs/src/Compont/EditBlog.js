import { React, useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { EdituserBlogs } from '../Action/UserBlogAction'

function Editblogs(props) {
    const { history } = props
    const { id } = props.match.params
    const state = useSelector(state => state)
    const { userBlogs, userInfo } = state
    const dispatch = useDispatch()
    const [user, setUser] = useState()
    console.log(user, 'user after from state')
    useEffect(() => {
        const ind = userBlogs.find((itm) => itm.id == id)
        setUser(ind)
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        const ind = userBlogs.findIndex((itm) => itm.id == id)
        dispatch(EdituserBlogs(user, id, ind, userInfo, history))
        console.log(user, 'updated user')
    }
    const handlEdit = (e) => {
        e.preventDefault()
        setUser({ ...user, [e.target.name]: e.target.value })

    }
    
    return (
        <div className="Registerblock">
            <h1 style={{marginLeft:'150px'}}>this is For Edit</h1>
            <Form className="register-box" onSubmit={handleSubmit}>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><b>Title</b></Form.Label>
                    <Form.Control style={{ width: '400px' }}
                        name="title"
                        placeholder="Title"
                        value={user?.title}
                        onChange={handlEdit}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><b>Discription</b></Form.Label>
                    <Form.Control style={{ width: '400px' }}
                        name="discription"
                        value={user?.discription}
                        placeholder="discription"
                        onChange={handlEdit}
                    />
                 </Form.Group>
                <Button style={{marginLeft:'150px'}} variant="primary" type="submit">
                    Submit
                </Button>
               
            </Form>


        </div>
    )
}
export default Editblogs