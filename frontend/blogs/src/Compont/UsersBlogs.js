import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router'
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteBlogs, EdituserBlogs } from '../Action/UserBlogAction';
import { indigo } from '@material-ui/core/colors';
function Userblogs(props){
    const {history}=props
    const dispatch = useDispatch()
    const state = useSelector((state)=>state)
    const { userBlogs ,userInfo} = state
    console.log(userInfo,'userinfo')
    const handldelete =(id)=>{
        const ind =userBlogs.findIndex((itm) => itm.id == id)
        dispatch(deleteBlogs(id,ind,userInfo))
    }
    const handlEdit=(id)=>{
        history.push(`/Edit-blog/${id}`)      
    }
    return(
        <div>
           <h2 style={{marginLeft:'400px'}}>{userInfo.user.username} Well come to yours blogs...</h2>
           <ul>
            {userBlogs?.map((i)=> 
            <div className='blogCards'>
            <button style={{float:'right'}} onClick={()=>handlEdit(i.id)}>Edit</button>
            <div><strong>Title:</strong><br></br>{i.title}</div>
            <div><strong>Discription:</strong><br></br>{i.discription}</div>
            <DeleteIcon className="DeletIcon" onClick={()=>handldelete(i.id, i.ind)}/>
            </div>)}
            </ul> 
        </div>
    )
}

export default withRouter(Userblogs)