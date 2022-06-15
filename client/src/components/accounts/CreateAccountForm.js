import React, {useState} from 'react'

const CreateAccountForm = (props) => {
  const {onSubmit,signup,onChange,errors,confirmReg,loggedUser,onSubmitLogin, onChangeLogin} = props;
  return (
    <div className='account-form'>
      {
        !loggedUser.username || confirmReg?
        <div className='account-form'>
      <div className='login'>
      <form onSubmit={onSubmitLogin}>
          <h1>Log in</h1>
          <input type='text ' name="email"placeholder='Email' value={loggedUser.email} onChange={onChangeLogin}/>
          <input type='text ' name="password"placeholder='Password' value={loggedUser.password} onChange={onChangeLogin}/>
          <button type="submit">Log in</button>
      </form>
      </div>
    </div>:
      <div className='signup'>
      <form onSubmit={onSubmit}>
          <h1>Sign up</h1>

          <label>{errors.username?errors.username.message:null}</label>
          <input type='text' name="username" placeholder='Username' value={signup.username} onChange={onChange}/>

          <label>{errors.email?errors.email.message:null}</label>
          <input type='text' name="email"placeholder='Email' value={signup.email} onChange={onChange}/>

          <label>{errors.password?errors.password.message:null}</label>
          <input type='text' name="password"placeholder='Password' value={signup.password} onChange={onChange}/>

          <label>{errors.confirmPassword?errors.confirmPassword.message:null}</label>
          <input type='text' name="confirmPassword"placeholder='Confirm Password' value={signup.confirmPassword} onChange={onChange}/>
          <button type="submit">Sign up</button>
      </form>
      </div>}
    </div>

  )
}

export default CreateAccountForm