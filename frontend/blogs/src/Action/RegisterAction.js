import axios from 'axios'

export const userRegister = (register,history) => async (dispatch)=> {
    try {  
        
        dispatch({
            type:'REFRESH_REGISTER_ERROR',
            payload:null
        })
        
        const { data } = await axios.post(
             'http://127.0.0.1:8000/blog/register-user/',
            register
        );
        dispatch({
            type:'USER_REGISTER',
            payload:data
        }); 
        history.push('/login')
    }catch(error){
        console.log(error.response.data,'error for register')
        dispatch({
            type:'REG_ERROR',
            payload:error.response.data
        })
    }
}