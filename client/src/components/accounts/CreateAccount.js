import React, {useState,useEffect} from 'react'
import CreateAccountForm from './CreateAccountForm'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const CreateAccount = ({open, children, onClose}) => {
  const [signup,setsignup] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [confirmReg,setConfirmReg] = useState("")

  const [errors,setErrors] = useState({})
  const [closeForm,setCloseForm] = useState(false)
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/users/register",signup,{withCredentials:true})
    .then((res)=>{
      console.log(res.data)
      setsignup({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
      setConfirmReg("Thank you for Register, you can now log in!")
      setErrors({})
    })
    .catch((err)=>{
      console.log(err.response.data.errors)
      setErrors(err.response.data.errors)
    })
  }
  const onChangeHandler = (e) => {
    const signupObject = {...signup}
    signupObject[e.target.name] = e.target.value
    console.log(signupObject)
    setsignup(signupObject)
  }
  const [loginErrors,setLoginErrors] = useState("")
  const [loggedUser,setLoggedUser] = useState({
    email: "",
    password:"",
  })
  const onSubmitLogin = (e) => {
    console.log(loggedUser)
    e.preventDefault();
    axios.post('http://localhost:8000/api/users/login',loggedUser,{withCredentials:true})
    .then((res)=>{
      console.log(res.data)
      window.location.reload()
    })
    .catch((err)=>{
      console.log(err.response.data)
      setLoginErrors(err.response.data.message)
      setLoggedUser({
        email: "",
        password: ""
      })
    })
  }
  const onChangeHandlerLogin = (e) => {
    const loggedUserObject = {...loggedUser}
    loggedUserObject[e.target.name] = e.target.value
    console.log(loggedUserObject)
    setLoggedUser(loggedUserObject)
  }
  if(!open) return null
  return (
    <>
      <div className='form-modal' id="form-modal">
        <div className='form-modal-header'>
          <button className='close-button' onClick={onClose}>&times;</button>
        </div>
        <div className='form-modal-body'>
        <CreateAccountForm signup={signup}
        onSubmit={onSubmitHandler} onChange={onChangeHandler} errors={errors} confirmReg={confirmReg} loggedUser={loggedUser}
        onSubmitLogin={onSubmitLogin} onChangeLogin={onChangeHandlerLogin}/>
        </div>
      </div>
        <div id="overlay"></div>
    </>
  )
}

export default CreateAccount