import axios from 'axios'

export const getBlogs = (userInfo) => async (dispatch) => {
    try{
       

        const res = await axios.get('http://127.0.0.1:8000/blog/fetch-blog/').then((res) => res.data);

        dispatch({
            type: 'GET_ALL_BLOGS',
            payload: res
        })

    }catch(error){
        dispatch({
            type: "GET_ALL_TODOS_FAILED",
            payload:
              error.respnse && console.error.respnse.data.detail
                ? error.respnse.data.detail
                : error.message,
          });
        }
    

}

export const CreateAction = (state,history) => async (dispatch) =>{
    try{
        
       
        const createBlog= await axios.post('http://127.0.0.1:8000/blog/create-blog/',state).then((res) => res.data);
        
        dispatch({
            type:'CREATE_BLOG',
            payload:createBlog
        })
       
        history.push('/logged-user')
        localStorage.grtItem("userWithToken", JSON.stringify(createBlog))
        
    }catch (error){
       dispatch({
           type:'CREATE_BLOG_ERROR',
           payload:error
       })
    }
}


