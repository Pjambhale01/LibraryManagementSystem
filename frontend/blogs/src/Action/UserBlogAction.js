import { useRadioGroup } from '@material-ui/core';
import axios from 'axios'

export const userBlogs=(userInfo)=> async(dispatch) =>{
    try{
        dispatch({
            type:'REFRESH_REGISTER_ERROR',
            payload:null
        })
        const config = {
            headers:{
                "Authorization" : `Bearer ${userInfo.token}` ,
            }                             
        }
        const res = await axios.get('http://127.0.0.1:8000/blog/logged-in-blog/',config).then((res) => res.data);
        console.log(res,'Users Blogs')
        dispatch({
            type:"LOGGED_USER_BLOG",
            payload:res
        })
        localStorage.setItem("userblog",JSON.stringify(res))
    }catch(error){
        dispatch({
            type:"LOGGED_USER_BLOG_ERROR",
            payload:error.massage
        })
    }
}


export const deleteBlogs = (id ,ind,userInfo) => async (dispatch)=>{
    try{
        const config = {
            headers:{
                "Authorization" : `Bearer ${userInfo.token}`,
                "Content-Type": "application/json"

            }
        }       
         
        await axios.delete(`http://127.0.0.1:8000/blog/delete-blog/${id}`,config);
        console.log(ind,'index for Blogs')
        dispatch({
            type:'DELETE_BLOGS',
            payload:ind
        })

    }catch(error){
        console.log(error)
    }
}

export const EdituserBlogs = (user,id,ind,userInfo,history) => async (dispatch)=>{
    // const {userId} = item
   try{
       const config={
           headers:{
            "Authorization" : `Bearer ${userInfo.token}`,
            "Content-Type": "application/json" 
           }
       }
       const res=await axios.put(`http://127.0.0.1:8000/blog/edit-blog/${id}`,user,config,).then((res)=>res.data)
       dispatch({
           type:"EDIT_BLOGS",
           payload:{ind,res}
       })
       history.push("/logged-user")
   }catch(error){
         console.log(error)
   }
}

export const setUserBlogtoken = ()=> async (dispatch)=>{
    const setToken = localStorage.getItem("userblog")?JSON.parse(localStorage.getItem('userblog')):{}

    dispatch({
        type:"REFRESH_USERBLOGS",
        payload:setToken
    })
}

// export const EdituserBlogs = (item,id,userInfo) => async (dispatch)=>{
//     const {userId} = item
//    try{
//        const config={
//            headers:{
//             "Authorization" : `Token ${userInfo.token}`,
//             "Content-Type": "application/json" 
//            }
//        }
    
//        await axios.put(`http://127.0.0.1:8000/blog/edit-blog/${id}`,config)
//        dispatch({
//            type:"EDIT_BLOGS",
//            payload:id
//        })
//    }catch(error){
//          console.log(error)
//    }
// }