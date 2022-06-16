import React, {useState} from 'react'
import EditAccount from '../components/accounts/EditAccount.js'
import Post from '../components/accounts/Post.js'
// import TopNav from '../TopNav.js'

const MyAccount = () => {
  const [loginToggle,setLoginToggle] = useState(false)
  return (
      <>
        {/* <TopNav loginToggle={loginToggle}/> */}
        <div className='container-contents'>
            <div className='container-contents-main'>
              <div id='top'></div>
              <div className='account-settings'>
                <EditAccount/>
              </div>
            </div>
            <button className='back-to-top'><a href="#top">TOP</a></button>
        </div>

      </>
  )
}

export default MyAccount