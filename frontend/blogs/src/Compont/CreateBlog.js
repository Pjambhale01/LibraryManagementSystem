import {React ,useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {CreateAction, getBlogs} from '../Action/createBlogAction'


export function Createblog(props) {
    const {history} = props
    // const dispatch = useDispatch()
    const dispatch = useDispatch()
    const user_Id =useSelector(state=>state)
    const {userInfo ,allBlogs} = user_Id
    const {user} = userInfo
    // console.log(user,'created state')
    const [state , setState] = useState({
        user:user.id
    })
    const handlChange = (e) =>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(CreateAction(state,history));
       
    }
    return (
        <div style={{ width: '50%', margin: 'auto' }}>
            <h3>create your bloge here!!! </h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><b>Title</b></Form.Label>
                    <Form.Control style={{ width: '400px' }}
                        name="title"
                        placeholder="Title"
                        value={state.title}
                        required
                        onChange={handlChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><b>Discription</b></Form.Label>
                    <Form.Control style={{ width: '400px' }}
                        name="discription"
                        value={state.discription}
                        required
                        placeholder="Discription"
                        onChange={handlChange}
                    />
                </Form.Group>
                <label for="category"><b>Category:</b></label>
                <select name='category' value={state.category}  onChange={handlChange}>
                    <option value="">Choose ..</option>
                    <option value="Technology">Technology</option>
                    <option value="Political">Political</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Envoirment">Envoirment</option>
                </select>
                <br></br>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
