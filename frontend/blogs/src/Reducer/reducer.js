export const reducer = (state={},action)=>{
    switch(action.type){
        case 'USER_LOGIN':
            return{
                ...state,userInfo:action.payload,
                                 
            }
        case 'REFRESH_LOGIN_ERRORS':
            return{
                ...state,loginError:action.payload
            }    
              
        case 'USER_LOGIN_ERROR':
            return {
                ...state,loginError:action.payload
            } 
        case "USER_REGISTER" :
            return{
                ...state,userRegister:action.payload
            }   
        case "REG_ERROR":
            return {
                ...state,registerError:action.payload
            }      
        case "REFRESH_REGISTER_ERROR":
            return{
                ...state,registerError:action.payload
            }
        case 'REFRESH':
            return {
                ...state,userInfo:action.payload,
                
            } 
        case "LOGIN_TRUE":
            return{
               ...state,login:true
            }
        case 'REFRESH_STATE':
            return{
                ...state,userInfo:{},
            } 
        case 'CREATE_BLOG':
            return{
                ...state,createBlog:action.payload
            }  
        
        case 'GET_ALL_BLOGS':
            return{
                ...state,allBlogs:action.payload
            }
               
        case 'REFRESH_FOR_CREATE':
            return{
                ...state,createBlog:action.payload
            } 
        case 'LOGGED_USER_BLOG':
            return{
                ...state,userBlogs:action.payload
            }
        case 'DELETE_BLOGS':{
            return{ 
                ...state,userBlogs:[...state.userBlogs.slice(0,action.payload),...state.userBlogs.slice(action.payload+1)]
            }         
        }

        case 'EDIT_BLOGS':{
            return{
                ...state,userBlogs:[...state.userBlogs.slice(0,action.payload.ind),action.payload.res,
                ...state.userBlogs.slice(action.payload.ind+1)]
            }
        }
    
        case 'SHOWPROFILE':
            return{
                ...state,showProfile:true
            }
                                
        default:
            return state
    
        }    
    
}