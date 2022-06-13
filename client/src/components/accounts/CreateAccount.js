import React, {useState} from 'react'
import CreateAccountForm from './CreateAccountForm'
import { useNavigate } from 'react-router-dom'
const CreateAccount = ({open, children, onClose}) => {
  const [signup,setsignup] = useState([])
  const [login,setLogin] = useState({
    email: "",
    password:"",
  })
  const [errors,setErrors] = useState({})
  const [closeForm,setCloseForm] = useState(false)
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setsignup([{
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }])
    console.log(signup)
    console.log("Thank you for signing up", signup)
    // navigate("/")
    setCloseForm(true);
    console.log(closeForm)
  }
  const onChangeHandler = (e) => {
    const signupObject = {...signup}
    signupObject[e.target.name] = e.target.value
    console.log(signupObject)
    setsignup(signupObject)
  }
  if(!open) return null
  return (
    <>
      <div className='form-modal' id="form-modal">
        <div className='form-modal-header'>
          <button className='close-button' onClick={onClose}>&times;</button>
        </div>
        <div className='form-modal-body'>
        <CreateAccountForm signup={signup} login={login}
        onSubmit={onSubmitHandler} onChange={onChangeHandler}/>
        </div>
      </div>
        <div id="overlay"></div>
    </>
  )
}

export default CreateAccount