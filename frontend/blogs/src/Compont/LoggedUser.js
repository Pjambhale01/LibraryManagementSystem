
import { React, useState, useEffect } from 'react'
import TextField from "@material-ui/core/TextField";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../Action/profileAction';
import 'reactjs-popup/dist/index.css';
import { Tabs, Tab, Button } from 'react-bootstrap'
import { getallBlogs } from '../Action/getallblogAction'
import { userBlogs } from '../Action/UserBlogAction';
import Loading from './Londing';
import Profile from '../Compont/Profile'
import AllBlogs from './AllBlogs';
import UsersBlogs from './UsersBlogs';
export function LoggedUser(props) {
    const { history } = props
    const User = useSelector(state => state)
    const { userInfo, login,allBlogs } = User
    
    const [user, setUser] = useState(false);
    const [showBlog ,setShowBlog] = useState(false);
    const [userBlog,setUserBlog] = useState(false)
     
    const dispatch = useDispatch()
    
    const handlLogout = () => {
        dispatch(logoutAction(history))
    }

    const handledit = () => {
        history.push('/create-blog')
    }
    const handleAllblock = () => {
      
        dispatch(getallBlogs(history));
        setShowBlog(!showBlog)
        setUserBlog(false)
    }
    const handleUserblock = () => {    
        dispatch(userBlogs(userInfo));
        setUserBlog(!userBlog)
        setShowBlog(false)
    }
    
    console.log(showBlog,'showBlogs')
    console.log(user,'user')
    const handlProfile = () => {
        setUser(!user)
    }

    return (
        <div>
            {/* {loading && <Loading/>} */}
            <div style={{float:'right',marginRight:'10px',cursor:'pointer'}}>
            {login && <Avatar onClick={handlProfile}  src="/broken-image.jpg" />}
            </div>
            <Button style={{marginLeft:'450px'}} onClick={handleAllblock}  variant="primary">All Books</Button>
            <Button style={{marginLeft:'5px'}} onClick={handleUserblock} variant="secondary">Users Books</Button>
            {user && <Profile/>}
            {showBlog && <AllBlogs/>}
            {userBlog && <UsersBlogs/>}
        </div>
    )
}