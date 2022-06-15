
import { useNavigate } from 'react-router-dom'
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import CreateAccount from '../accounts/CreateAccount'
const TopNav = () => {
    const navigate = useNavigate()
    const redirect = (param) => {
        navigate(`${param}`)
    }
    const [toggleLogin,setToggleLogin] = useState(false)
    const [user,setUser] = useState({})
    useEffect(()=> {
      axios.get("http://localhost:8000/api/users/user",{withCredentials:true})
        .then((res)=>{
          console.log(res.data)
          setUser(res.data)
        })
        .catch((err)=>console.log(err))
    },[])
    const signout = () => {
      axios.post("http://localhost:8000/api/users/logout",{},{withCredentials:true})
      .then((res)=>{
        console.log(res.data)
        window.location.reload()
      })
      .catch((err)=>console.log(err))
    }
  return (
    <>
    <nav className='top-nav'>
        <ul>
          {/* <div className='top-nav-left'>
            <h1>POWERLifts</h1>
          </div> */}
            <div className='top-nav-right'>
              <button onClick={()=>redirect('/upload')}>Upload</button>
              {/* <button onClick={()=>redirect('/create_account')}>Log in</button> */}
              {
                !user.username?
                <button onClick={()=>setToggleLogin(!toggleLogin)}className='create-account-toggle'>Log in</button>:
                <button onClick={signout}className='create-account-toggle'>Signout</button>
                }
            </div>
        </ul>
    </nav>
    <CreateAccount open={toggleLogin} onClose={()=>setToggleLogin(false)}
    />
    </>
  )
}

export default TopNav