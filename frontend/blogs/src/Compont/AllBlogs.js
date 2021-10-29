// import React from 'react'
import { useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Button, Card, CardGroup } from 'react-bootstrap'
import { React, useState, useEffect } from 'react'


function AllBlogs( props) {
    const {history}=props
    const state = useSelector(state => state)
    const { allBlogs } = state

    return (
        <div>       
          
            <h2 style={{marginLeft:'400px'}}>All Books are hear!!!!</h2>
            <ul>
            {allBlogs?.map((i)=> 
            <div className='blogCards'>
            <div><strong>Title:</strong><br></br>{i.title}</div>
            <div><strong>Discription:</strong><br></br>{i.discription}</div>
            </div>)}
            </ul> 
        </div>
    )
}
export default withRouter(AllBlogs)