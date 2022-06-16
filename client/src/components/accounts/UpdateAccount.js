import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import UpdateAccountForm from './UpdateAccountForm'
const UpdateAccount = ({open, children, onClose}) => {
  const [errors,setErrors] = useState({})
  const [updateUser,setUpdateUser] = useState({
    profileImg: "",
    username: "",
    firstName: "",
    lastName: "",
  })
  useEffect(()=> {
    axios.get("http://localhost:8000/api/users/user",{withCredentials:true})
      .then((res)=>{
        console.log(res.data)
        setUpdateUser(res.data)
      })
      .catch((err)=>console.log(err))
  },[])
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(updateUser.username,updateUser)
    axios.put("http://localhost:8000/api/user/" + updateUser._id,updateUser,{withCredentials:true})
    .then((res)=>{
      console.log(res.data)
      setErrors({})
      window.location.reload()
    })
    .catch((err)=>{
      console.log(err.response.data.errors)
      setErrors(err.response.data.errors)
    })
  }
  const onChangeHandler = (e) => {
    const signupObject = {...updateUser}
    signupObject[e.target.name] = e.target.value
    console.log(signupObject)
    setUpdateUser(signupObject)
  }
  if(!open) return null
  return (
    <>
      <div className='form-modal' id="form-modal">
        <div className='form-modal-header'>
          <button className='close-button' onClick={onClose}>&times;</button>
        </div>
        <div className='form-modal-body'>
        <UpdateAccountForm updateUser={updateUser}
        onSubmit={onSubmitHandler} onChange={onChangeHandler} errors={errors}/>
        </div>
      </div>
        <div id="overlay"></div>
    </>
  )
}

export default UpdateAccount