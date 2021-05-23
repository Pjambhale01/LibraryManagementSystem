import Header from "./Compont/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Compont/Login";
import HomeScreen from "./Screen/HomeScreen";
import { Register } from "./Compont/Register";
import {LoggedUser} from "./Compont/LoggedUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "./Action/LoginAction";
import { Createblog } from "./Compont/CreateBlog";
import AllBlogs  from "./Compont/AllBlogs";
import { Footer } from "./Compont/Footer";
import { setBlockToken } from "./Action/getallblogAction";
import {LogProfile} from './Compont/Profile'
import { setUserBlogtoken } from "./Action/UserBlogAction";
import Editblogs from "./Compont/EditBlog";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(setToken())
      dispatch(setBlockToken())
      dispatch(setUserBlogtoken())
  },[])
  return (
    <div className="App">
       <BrowserRouter>
        <Header/>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path='/logged-user'component={LoggedUser}/>
        <Route path ='/create-blog'component={Createblog}/>
        <Route path ='/all-blogs'component={AllBlogs}/>
        <Route path ='/Edit-blog/:id'component={Editblogs}/>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
