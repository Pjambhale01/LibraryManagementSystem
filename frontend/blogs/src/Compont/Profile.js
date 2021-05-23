import { React, useState, useEffect } from 'react'
import TextField from "@material-ui/core/TextField";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../Action/profileAction';
import { withRouter } from 'react-router';

function Profile(props) {
    const { history } = props
    const User = useSelector(state => state)
    const { userInfo } = User
    const dispatch = useDispatch()
    const [loginInfo, setLoginInfo] = useState({})
    // console.log(loginInfo,'rvvrrtve')
    useEffect(() => {
        if (userInfo) {
            setLoginInfo(userInfo);
        }
    }, [userInfo]);
    const handlLogout = () => {
        dispatch(logoutAction(history))
    }

    const handledit = () => {
        history.push('/create-blog')
    }
    return (
        <div className='profile_box'>

            <div className='profile'>
                <div  >
                    <form className="form">
                        <TextField
                            id="standard-basic"
                            className="textField"
                            value={loginInfo.user?.username}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="standard-basic"
                            className="textField"
                            value={loginInfo.user?.email}
                            InputProps={{
                                readOnly: true,
                            }}
                            style={{
                                margin: "25px auto",
                            }}
                        />

                        <ExitToAppIcon style={{ margin: "20px 18px", cursor: "pointer" }} onClick={handlLogout} />
                        <EditIcon style={{ margin: "20px 18px", cursor: "pointer" }} onClick={handledit} />

                    </form>

                </div>
            </div>
        </div>
    )
}
export default withRouter(Profile)