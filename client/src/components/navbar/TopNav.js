
import { useNavigate } from 'react-router-dom'
import React, {useState} from 'react'
import CreateAccount from '../accounts/CreateAccount'
const TopNav = () => {
    const navigate = useNavigate()
    const redirect = (param) => {
        navigate(`${param}`)
    }
    const [toggleLogin,setToggleLogin] = useState(false)
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
              <button onClick={()=>setToggleLogin(!toggleLogin)}className='create-account-toggle'>Log in</button>
            </div>
        </ul>
    </nav>
    <CreateAccount open={toggleLogin} onClose={()=>setToggleLogin(false)}
    />
    </>
  )
}

export default TopNav