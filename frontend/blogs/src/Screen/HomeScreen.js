import React from 'react'
import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
import { Image, Jumbotron, Button } from 'react-bootstrap'
import { getallBlogs } from '../Action/getallblogAction'
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import CopyrightIcon from "@material-ui/icons/Copyright";

const HomeScreen = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(getallBlogs())
    }
    return (
        <div className="HomeScreen">
            {/* <div className="infobox">
                <h1 className="Font">WE CAN MAKE ALL TYPE OF</h1><br></br>
                <h1 className="Font1" style={{ textAlign: 'center' }}>BOLGS</h1>
            </div> */}
            <div className="footer text-center ">
                <span style={{ fontSize: "13px", color: "black" }}>
                    {/* <CopyrightIcon style={{ fontSize: "18px", color: "black" }} /> */}
                    {/* <FavoriteIcon
                        className="heartbeat"
                        style={{ fontSize: "18px", color: "red" }}
                    /> */}
                </span>
            </div>
        </div>
    )

}

export default HomeScreen