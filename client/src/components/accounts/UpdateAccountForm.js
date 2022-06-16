import React, {useState} from 'react'

const UpdateAccountForm = (props) => {
  const {onSubmit,updateUser,onChange,errors} = props;
  return (
    <div className='account-form'>
      <div className='signup'>
      <form onSubmit={onSubmit}>
          <h1>Edit Account</h1>
          <input type='text' name="profileImg" placeholder='Profile Image' value={updateUser.profileImg} onChange={onChange}/>

          <label>{errors.username?errors.username.message:null}</label>
          <input type='text' name="username" placeholder='Username' value={updateUser.username} onChange={onChange}/>

          <input type='text' name="firstName" placeholder='First Name' value={updateUser.firstName} onChange={onChange}/>

          <input type='text' name="lastName" placeholder='Last Name' value={updateUser.lastName} onChange={onChange}/>

          {/* <label>{errors.password?errors.password.message:null}</label>
          <input type='text' name="password"placeholder='Password' value={signup.password} onChange={onChange}/>

          <label>{errors.confirmPassword?errors.confirmPassword.message:null}</label>
          <input type='text' name="confirmPassword"placeholder='Confirm Password' value={signup.confirmPassword} onChange={onChange}/> */}
          <button type="submit">Save</button>
      </form>
      </div>
    </div>

  )
}

export default UpdateAccountForm