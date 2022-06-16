
import { useNavigate } from 'react-router-dom'
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import CreateAccount from './components/accounts/CreateAccount'
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
        .catch((err)=>console.log(err.response))
        setUser({})

    },[setUser])
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
              <input type="text" placeholder='Search'/>
            </div> */}
            <div className='top-nav-left'>
              <a href="#home" className='logo'>PowerLifts</a>
            </div>
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
    <div className='post'>
      <CreateAccount open={toggleLogin} onClose={()=>setToggleLogin(false)}
      />
    </div>
    </>
  )
}

export default TopNav