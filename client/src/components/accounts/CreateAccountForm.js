import React, {useState} from 'react'

const CreateAccountForm = (props) => {
  const {onSubmit,signup,login,onChange,errors} = props;
  return (
    <div className='account-form'>
      {/* <div className='account-form'>
        <div className='login'>
        <form onSubmit={onSubmit}>
            <h1>Log in</h1>
            <input type='text ' name="email"placeholder='Email' value={login.email} onChange={onChange}/>
            <input type='text ' name="password"placeholder='Password' value={login.password} onChange={onChange}/>
            <button type="submit">Log in</button>
        </form>
        </div>
      </div> */}
      <div className='signup'>
      <form onSubmit={onSubmit}>
          <h1>Sign up</h1>
          <input type='text' name="username" placeholder='Username' value={signup.username} onChange={onChange}/>
          <input type='text' name="email"placeholder='Email' value={signup.email} onChange={onChange}/>
          <input type='text' name="password"placeholder='Password' value={signup.password} onChange={onChange}/>
          <input type='text' name="confirmPassword"placeholder='Confirm Password' value={signup.confirmPassword} onChange={onChange}/>
          <button type="submit">Sign up</button>
      </form>
      </div>
    </div>

  )
}

export default CreateAccountForm