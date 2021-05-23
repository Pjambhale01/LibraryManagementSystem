import {Link} from 'react-router-dom'
export const logoutAction = (history) => async (dispatch)=>{
    localStorage.clear();
    history.push('/')
    
    dispatch({
        type: "REFRESH_STATE",
      });

}

