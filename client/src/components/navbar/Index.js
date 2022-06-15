import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import SuggestedAccounts from '../accounts/SuggestedAccounts'

const Index = () => {
    const [user,setUser] = useState({})
    useEffect(()=> {
      axios.get("http://localhost:8000/api/users/user",{withCredentials:true})
        .then((res)=>{
          console.log(res.data)
          setUser(res.data)
        })
        .catch((err)=>console.log(err))
    },[])
  return (
      <>
        <nav>
            <ul>
                <li className='logo'><a href="#home">PowerLifts</a></li>
                <li><a href="#home">Home</a></li>
                <li><a href="#following">Following</a></li>
                <li><Link to={`/users/${user.username}`}>My Account</Link></li>
            <div className='topics'>
            <span>Excercises</span>
                <li><a href="#squat">Squat</a></li>
                <li><a href="#bench">bench</a></li>
                <li><a href="#deadlift">Deadlift</a></li>
            </div>
            <div className='suggested-accounts'>
            <span>Suggested-accounts</span>
                <SuggestedAccounts/>
            </div>
            <div className='extra-links'>
                <span>Extra-links</span>
                <li><a href="#account1">About</a></li>
                <li><a href="#account2">Contacts</a></li>
                <li><a href="#account3">Github</a></li>
            </div>
            <div className='personal-links'>
                <li>Created by <a href="#jonelbriones.com">Jonel</a></li>
            </div>
            </ul>
        </nav>
    </>
  )
}

export default Index