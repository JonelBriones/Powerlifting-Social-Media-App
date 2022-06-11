import React from 'react'
import { useNavigate } from 'react-router-dom'
const TopNav = () => {
    const navigate = useNavigate()
    const redirect = (param) => {
        navigate(`/${param}`)
    }
  return (
    <nav className='top-nav'>
        <ul>
            {/* <div className='top-nav-left'>
            <h1 to={"/"}>POWERLifts</h1>
            </div>
            <div className='top-nav-right'>
            <button onClick={redirect('/upload')}>Upload</button>
            <button onClick={redirect('/create_account')}>Log in</button>
            </div> */}
        </ul>
        <button onClick={()=>redirect('/create_account')}>Log in</button>
    </nav>
  )
}

export default TopNav