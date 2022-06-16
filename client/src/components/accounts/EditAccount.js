import React, {useState,useEffect} from 'react'
import axios from 'axios';
import userguest from './../images/user-guest.png'
import UpdateAccount from './UpdateAccount';
import {useNavigate} from 'react-router-dom'
const EditAccount = () => {
    const [user,setUser] = useState({})
    const [toggleLogin,setToggleLogin] = useState(false)
    const navigate = useNavigate()
    useEffect(()=> {
      axios.get("http://localhost:8000/api/users/user",{withCredentials:true})
        .then((res)=>{
          console.log(res.data)
          setUser(res.data)
        })
        .catch((err)=>console.log(err))
        navigate('/')
    },[])
  return (
    <>
        {/* <div>
            <ul>
                <li><img src={`${user.profileImg}`} alt='profile-img'/></li>
                <li><h4>{user.username}</h4></li>
                
            </ul>
        </div> */}
        <div className='post'>
        <div className='profile-info-container'>
          <div className='profile-info'>
            <div className='profile-img'>
              <a href="#ijonel906">
                  {
                      user.profileImg?
              <img src={`${user.profileImg}`} alt='profile-img'/>:<img src={`${userguest}`} alt='profile-img' style={{border: "1px solid black"}}/>
              }
              </a>
            </div>
            <div className='profile-name'>
              <a href='#ijonel906'><h4>{user.username}</h4>
              <span>{user.firstName+" " + user.lastName}</span></a>
            </div>
          </div>
          <div className='follow-btn'><button onClick={()=>setToggleLogin(!toggleLogin)}>Edit</button></div>
        </div>
        <UpdateAccount open={toggleLogin} onClose={()=>setToggleLogin(false)}/>
      </div>
    </>
  )
}

export default EditAccount