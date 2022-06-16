import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import SuggestedAccounts from './components/accounts/SuggestedAccounts'
import CreateAccount from './components/accounts/CreateAccount'

const LeftNav = () => {
    const [user,setUser] = useState({})
    const [toggleLogin,setToggleLogin] = useState(false)
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
                {/* <li className='logo'><a href="#home">PowerLifts</a></li> */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/following">Following</Link></li>
                  {
                    user.username?
                  <li><Link to={`/users/${user.username}`}>My Account</Link></li>:
                  <nav className='top-nav'>
                    <div className='top-nav-right'>
                        <button onClick={()=>setToggleLogin(!toggleLogin)}className='create-account-toggle'>Log in</button>
                    </div>
                  </nav>
                  }
            <div className='topics'>
            <span>Exercises</span>
                <li><Link to="/squat">Squat</Link></li>
                <li><Link to="/bench">Bench</Link></li>
                <li><Link to="/deadlift">Deadlift</Link></li>
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
        {/* <div className='post'>
          <CreateAccount open={toggleLogin} onClose={()=>setToggleLogin(false)}
          />
        </div> */}
    </>
  )
}

export default LeftNav