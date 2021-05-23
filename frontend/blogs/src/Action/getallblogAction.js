import axios from 'axios'

export const getallBlogs = (history) => async (dispatch)=>{
   try{
        const res = await axios.get('http://127.0.0.1:8000/blog/user-blogs/').then((res)=>res.data);
        console.log(res,'getblogs')
        dispatch({
            type:"GET_ALL_BLOGS",
            payload:res
        })
        
        localStorage.setItem("blogs", JSON.stringify(res))
        // history.push('/all-blogs')
   } catch(error){
       dispatch({
           type:"GET_ALL_BLOGS_ERROR",
           payload:error
       })
       
   }
} 
export const setBlockToken = (res) =>async (dispatch) => {
   
    const setToken = localStorage.getItem("blogs")?JSON.parse(localStorage.getItem('blogs')):{}
    console.log(setToken,'refress ')
    dispatch({
        type:"REFRESH_ALL_BLOGS",
        payload:setToken
    })
}

