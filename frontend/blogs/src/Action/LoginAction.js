import axios from 'axios'


export const userlogin = (login,history) => async (dispatch) => {
    try {

      dispatch({
        type:"REFRESH_LOGIN_ERRORS",
        payload:null
      })
    //   dispatch({
    //     type:'REFRESH_REGISTER_ERROR',
    //     payload:null
    // })
      const {data} = await axios.post(
        'http://127.0.0.1:8000/blog/login-user/',
        login
      );
      
      dispatch({
        type:'USER_LOGIN',
        payload:data
      })
      history.push("/logged-user")
      localStorage.setItem("userWithToken", JSON.stringify(data))

    } 
    catch (error) {
      console.log(error,'login error')
        dispatch({
          type: "USER_LOGIN_ERROR",
          payload: error.response.data.detail
        });
      }
} 

export const setToken= ()=>async(dispatch)=>{
   const set = localStorage.getItem("userWithToken")?JSON.parse(localStorage.getItem('userWithToken')):{}
 
   dispatch({
     type:'REFRESH',
     payload:set
   })
   dispatch({
    type:"LOGIN_TRUE",
  })
}