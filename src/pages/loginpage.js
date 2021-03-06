/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useContext,useEffect} from 'react'
import { withRouter } from 'react-router'
import {magic} from '../utils/magic'
import { AuthContext } from '../Auth'
import { Button, Input } from '@mui/material'

const LoginPage=({history,location})=>{
    const {currentUser,checkuser,onlogin}=useContext(AuthContext)

  const [email,setemail]=useState("")

  useEffect(() => {
      console.log("thwaidiasd",currentUser)
      const {pathname}=location
      console.log(pathname)
      if(currentUser){
        history.push('/mainpage')
      }
      
      
  }, [currentUser])

   
    return(
        <div>
            <Input placeholder="Email" type="email" onChange={(e)=>{setemail(e.target.value)}}/>
          
        <Button variant="contained" color="primary" onClick={()=>{onlogin(email)}}>SUbmit</Button>
        </div>
    )
}
export default withRouter(LoginPage)