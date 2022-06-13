import React from 'react'

const Login = (props) => {
  const {onSubmit,login,onChange,errors} = props;
  return (
    <div className='account-form'>
      <div className='login'>
      <form onSubmit={onSubmit}>
          <h1>Log in</h1>
          <input type='text ' name="email"placeholder='Email' value={login.loginEmail}/>
          <input type='text ' name="password"placeholder='Password' value={login.loginPassword}/>
          <button type="submit">Log in</button>
      </form>
      </div>
    </div>

  )
}

export default Login